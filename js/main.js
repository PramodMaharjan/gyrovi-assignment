document.addEventListener("DOMContentLoaded", () => {
	const hamburgerMenu = document.querySelector(".hamburger-icon");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeIcon = document.querySelector(".close-icon");

	hamburgerMenu.addEventListener("click", () => {
		mobileMenu.classList.toggle("active");
	});

	closeIcon.addEventListener("click", () => {
		mobileMenu.classList.toggle("active");
	});
});
