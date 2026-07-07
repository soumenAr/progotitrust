const translations = {
	en: {
		siteTitle: 'Progoti Development & Welfare Trust',
		about: 'About us',
		whatwedo: 'What we do',
		insights: 'Insights',
		careers: 'Careers',
		media: 'Media',
		contact: 'Contact',
		subscribe: 'Subscribe',
		aboutText: 'Replace with expanded homepage.'
	},
	bn: {
		siteTitle: 'প্রগতি ডেভেলপমেন্ট অ্যান্ড ওয়েলফেয়ার ট্রাস্ট',
		about: 'আমাদের সম্পর্কে',
		whatwedo: 'আমরা যা করি',
		insights: 'ইনসাইটস',
		careers: 'ক্যারিয়ার',
		media: 'মিডিয়া',
		contact: 'যোগাযোগ',
		subscribe: 'সাবস্ক্রাইব',
		aboutText: 'প্রারম্ভিক টেক্সট এখানে প্রতিস্থাপন করুন।'
	}
};

let currentLang = 'en';

function setLanguage(lang){
	if(!translations[lang]) return;
	currentLang = lang;
	document.querySelectorAll('[data-i18n]').forEach(el=>{
		const key = el.getAttribute('data-i18n');
		const text = translations[lang][key];
		if(text) el.innerText = text;
	});
	document.querySelectorAll('.lang').forEach(btn=>btn.classList.toggle('active', btn.id===`lang-${lang}`));
}

document.getElementById('lang-en').addEventListener('click',()=>setLanguage('en'));
document.getElementById('lang-bn').addEventListener('click',()=>setLanguage('bn'));

document.getElementById('subscribeBtn').addEventListener('click',()=>{
	const email = prompt('Enter your email to subscribe:');
	if(email && /\S+@\S+\.\S+/.test(email)){
		alert('Thanks for subscribing!');
	} else if(email){
		alert('Please enter a valid email address.');
	}
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
	a.addEventListener('click',function(e){
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if(target) target.scrollIntoView({behavior:'smooth'});
	});
});

// Initialize
setLanguage(currentLang);
