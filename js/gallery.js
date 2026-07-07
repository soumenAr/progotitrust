const galleryGrid = document.getElementById("galleryGrid");
const galleryStatus = document.getElementById("galleryStatus");

function createGalleryCard(photoUrl, fileName, index) {
	const figure = document.createElement("figure");
	figure.className = "gallery-item reveal";

	const image = document.createElement("img");
	image.src = photoUrl;
	image.alt = `Gallery photo ${index + 1}`;
	image.loading = "lazy";

	const caption = document.createElement("figcaption");
	caption.textContent = fileName;

	figure.appendChild(image);
	figure.appendChild(caption);
	return figure;
}

async function loadGallery() {
	if (!galleryGrid || !galleryStatus) {
		return;
	}

	const apiUrl = "https://api.github.com/repos/soumenAr/progotitrust/contents/assets/gallery?ref=main";

	try {
		const response = await fetch(apiUrl, { headers: { Accept: "application/vnd.github+json" } });
		if (!response.ok) {
			throw new Error("Could not fetch gallery folder.");
		}

		const entries = await response.json();
		const photos = entries
			.filter((item) => item.type === "file" && /\.(jpg|jpeg|png|webp|gif)$/i.test(item.name))
			.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));

		galleryGrid.innerHTML = "";

		if (!photos.length) {
			galleryStatus.textContent = "No photos found yet. Upload images to assets/gallery and push to GitHub.";
			return;
		}

		photos.forEach((photo, index) => {
			galleryGrid.appendChild(createGalleryCard(photo.download_url, photo.name, index));
		});

		galleryStatus.textContent = `${photos.length} photos loaded from gallery.`;
	} catch (error) {
		galleryStatus.textContent = "Could not load gallery right now. Please try again after pushing photos.";
	}
}

loadGallery();
