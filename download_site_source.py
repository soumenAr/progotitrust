#!/usr/bin/env python3
"""
Download publicly accessible client-side source files from a website for reference.

What this script can download:
- HTML pages
- CSS, JavaScript, images, fonts, and similar static assets referenced by pages

What this script cannot download:
- Server-side source code (e.g., PHP, Node, Python backend code)
- Database contents
- Protected/private content behind auth (unless your session/cookies handle it)

Usage:
  python download_site_source.py https://example.com --output ./site_dump --max-pages 100

Install deps first:
  pip install requests beautifulsoup4
"""

from __future__ import annotations

import argparse
import pathlib
import re
from collections import deque
from typing import Iterable
from urllib.parse import urljoin, urlparse, urldefrag

import requests
from bs4 import BeautifulSoup


ASSET_ATTRS = {
    "link": "href",
    "script": "src",
    "img": "src",
    "source": "src",
    "video": "src",
    "audio": "src",
}


class SiteDownloader:
    def __init__(
        self,
        base_url: str,
        output_dir: pathlib.Path,
        max_pages: int = 100,
        timeout: int = 20,
        user_agent: str = "Mozilla/5.0 (compatible; SourceMirror/1.0)",
    ) -> None:
        self.base_url = self._normalize_url(base_url)
        self.base_domain = urlparse(self.base_url).netloc
        self.output_dir = output_dir
        self.max_pages = max_pages
        self.timeout = timeout
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": user_agent})

        self.visited_pages: set[str] = set()
        self.downloaded_assets: set[str] = set()

    def _normalize_url(self, url: str) -> str:
        url = url.strip()
        if not urlparse(url).scheme:
            url = f"https://{url}"
        clean, _frag = urldefrag(url)
        return clean

    def _is_http(self, url: str) -> bool:
        parsed = urlparse(url)
        return parsed.scheme in {"http", "https"}

    def _same_domain(self, url: str) -> bool:
        return urlparse(url).netloc == self.base_domain

    def _safe_file_path(self, url: str) -> pathlib.Path:
        parsed = urlparse(url)
        path = parsed.path

        # Treat extensionless paths as page routes and store as index.html.
        # This prevents file/dir collisions on Windows (e.g. /about-us).
        has_extension = bool(pathlib.PurePosixPath(path).suffix)
        if not path or path.endswith("/"):
            path = f"{path}index.html"
        elif not has_extension:
            path = f"{path}/index.html"

        # Ensure query-based uniqueness for assets with same path
        if parsed.query:
            query_suffix = re.sub(r"[^a-zA-Z0-9_-]", "_", parsed.query)[:80]
            stem, dot, suffix = path.rpartition(".")
            if dot:
                path = f"{stem}__q_{query_suffix}.{suffix}"
            else:
                path = f"{path}__q_{query_suffix}"

        rel = pathlib.Path(parsed.netloc) / path.lstrip("/")
        return self.output_dir / rel

    def _save_bytes(self, path: pathlib.Path, data: bytes) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)

    def _save_text(self, path: pathlib.Path, text: str) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8", errors="ignore")

    def _fetch(self, url: str) -> requests.Response | None:
        try:
            resp = self.session.get(url, timeout=self.timeout)
            if resp.status_code >= 400:
                print(f"[skip] {resp.status_code} {url}")
                return None
            return resp
        except requests.RequestException as exc:
            print(f"[error] {url} -> {exc}")
            return None

    def _extract_links(self, page_url: str, soup: BeautifulSoup) -> tuple[set[str], set[str]]:
        page_links: set[str] = set()
        asset_links: set[str] = set()

        # Internal page links
        for a in soup.find_all("a", href=True):
            href = urljoin(page_url, a["href"])
            href, _frag = urldefrag(href)
            if self._is_http(href) and self._same_domain(href):
                page_links.add(href)

        # Static asset links
        for tag_name, attr_name in ASSET_ATTRS.items():
            for tag in soup.find_all(tag_name):
                if not tag.get(attr_name):
                    continue
                link = urljoin(page_url, tag[attr_name])
                link, _frag = urldefrag(link)
                if self._is_http(link) and self._same_domain(link):
                    asset_links.add(link)

        # Inline CSS url(...) assets
        for style_tag in soup.find_all("style"):
            css = style_tag.get_text("\n", strip=True)
            for url_value in self._extract_css_urls(css):
                link = urljoin(page_url, url_value)
                link, _frag = urldefrag(link)
                if self._is_http(link) and self._same_domain(link):
                    asset_links.add(link)

        return page_links, asset_links

    def _extract_css_urls(self, css_text: str) -> Iterable[str]:
        pattern = re.compile(r"url\((?:'|\")?([^'\")]+)(?:'|\")?\)")
        for m in pattern.finditer(css_text):
            candidate = m.group(1).strip()
            if candidate.startswith("data:"):
                continue
            yield candidate

    def download_asset(self, url: str) -> None:
        if url in self.downloaded_assets:
            return
        self.downloaded_assets.add(url)

        resp = self._fetch(url)
        if not resp:
            return

        out = self._safe_file_path(url)
        self._save_bytes(out, resp.content)
        print(f"[asset] {url} -> {out}")

        # If CSS file, parse nested url(...) assets
        content_type = resp.headers.get("content-type", "").lower()
        if "text/css" in content_type or out.suffix.lower() == ".css":
            text = resp.text
            for nested in self._extract_css_urls(text):
                nested_url = urljoin(url, nested)
                nested_url, _frag = urldefrag(nested_url)
                if self._is_http(nested_url) and self._same_domain(nested_url):
                    self.download_asset(nested_url)

    def download_page(self, url: str) -> tuple[set[str], set[str]]:
        resp = self._fetch(url)
        if not resp:
            return set(), set()

        html = resp.text
        out = self._safe_file_path(url)
        self._save_text(out, html)
        print(f"[page ] {url} -> {out}")

        soup = BeautifulSoup(html, "html.parser")
        page_links, asset_links = self._extract_links(url, soup)
        return page_links, asset_links

    def run(self) -> None:
        print(f"Base URL   : {self.base_url}")
        print(f"Output Dir : {self.output_dir}")
        print(f"Max Pages  : {self.max_pages}")

        q: deque[str] = deque([self.base_url])

        while q and len(self.visited_pages) < self.max_pages:
            current = q.popleft()
            if current in self.visited_pages:
                continue
            self.visited_pages.add(current)

            page_links, asset_links = self.download_page(current)

            for asset in sorted(asset_links):
                self.download_asset(asset)

            for link in sorted(page_links):
                if link not in self.visited_pages:
                    q.append(link)

        print("\nDone.")
        print(f"Pages downloaded : {len(self.visited_pages)}")
        print(f"Assets downloaded: {len(self.downloaded_assets)}")
        print("Note: Only publicly accessible client-side files are downloadable.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download publicly accessible website source files for reference."
    )
    parser.add_argument("url", help="Website URL, e.g. https://example.com")
    parser.add_argument(
        "--output",
        default="site_dump",
        help="Output directory (default: site_dump)",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=100,
        help="Maximum number of pages to crawl (default: 100)",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=20,
        help="HTTP timeout seconds (default: 20)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    downloader = SiteDownloader(
        base_url=args.url,
        output_dir=pathlib.Path(args.output),
        max_pages=args.max_pages,
        timeout=args.timeout,
    )
    downloader.run()


if __name__ == "__main__":
    main()
