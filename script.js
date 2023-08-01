
// mobile menu
const hamburger = document.querySelector(".hamburger");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

// toggle
hamburger.addEventListener("click", () => {
	mobileMenuContainer.classList.toggle("active");
});


// back2top btn

let backToTopBtn = document.getElementById("back-2-top-btn");
backToTopBtn.addEventListener("click", topFunction);

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		backToTopBtn.style.display = "block";
	} else {
		backToTopBtn.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// end of back2top btn
