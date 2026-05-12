// Filename: news.js

document.addEventListener("DOMContentLoaded", function () {
	
	const newsItem = document.querySelectorAll(".js-animate");
	
	const observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	}, {
		threshold: 0.2
	});
	
	newsItem.forEach(function (item) {
		observer.observe(item);
	});

});

		
		