// $(document).ready(function() {
var header = $(".header");
var hamburgerBtn = $(".hamburger-btn");
var hamburgerBtnOpen = $(".hamburger-btn-open");
var hamburgerBtnClose = $(".hamburger-btn-close");
var lastScrollY = 0;
var whyReasons = document.getElementsByClassName("why-reason");
var reasonBounds;
// var demo = $(".demo");
// var aiContainer = $(".ai-container");

window.addEventListener("scroll", function(e) {
	toggleNav(window.scrollY);
	// fadeSections();
	fadeElements();
});
hamburgerBtn.click(function() {
	$(".nav").toggleClass("hamburger-show");
	hamburgerBtnOpen.toggleClass("hamburger-btn-show");
	hamburgerBtnClose.toggleClass("hamburger-btn-show");
});
function fadeElements() {
	[].forEach.call(whyReasons, (reason, index) => {
		reasonBounds = reason.getBoundingClientRect();
		if (window.scrollY > reasonBounds.bottom) {
			whyReasons[index].style.opacity = 1;
		}
	});
}
// var fadeSections = function fadeSections() {
// 	if (window.scrollY > 420) {
// 		whyReasons.css("opacity", "1");
// } else if (window.scrollY > 1300) {
// 	demo.css("opacity", "1");
// } else if (window.scrollY > 2000) {
// 	aiContainer.css("opacity", "1");
// 	}
// };
function toggleNav(currentScrollY) {
	if (lastScrollY > 500 && lastScrollY < currentScrollY) {
		header.addClass("slideOff");
	} else {
		header.removeClass("slideOff");
	}
	lastScrollY = currentScrollY;
}
// });
