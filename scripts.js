var header = $('.header');
var hamburgerBtn = $('.hamburger-btn');
var hamburgerBtnOpen = $('.hamburger-btn-open');
var hamburgerBtnClose = $('.hamburger-btn-close');
var lastScrollY = 0;
var whyReasons = document.getElementsByClassName('why-reason');

var comparisonBtnContainer = $('.comparison-btn-container');
var reduxExample = $('.redux-example');
var casiumExample = $('.casium-example');
var reduxBtn = $('.redux-btn');
var casiumBtn = $('.casium-btn');

comparisonBtnContainer.click(() => {
	reduxExample.toggleClass('block');
	casiumExample.toggleClass('block');
	reduxBtn.toggleClass('block');
	casiumBtn.toggleClass('block');
});

window.addEventListener('scroll', function(e) {
	toggleNav(window.scrollY);
	fadeElementsIn();
});
hamburgerBtn.click(function() {
	$('.nav').toggleClass('hamburger-show');
	hamburgerBtnOpen.toggleClass('hamburger-btn-show');
	hamburgerBtnClose.toggleClass('hamburger-btn-show');
});
function fadeElementsIn() {
	[].forEach.call(whyReasons, (reason, index) => {
		var reasonBounds = reason.getBoundingClientRect();
		if (window.scrollY > reasonBounds.bottom) {
			whyReasons[index].style.opacity = 1;
		}
	});
}
function toggleNav(currentScrollY) {
	if (lastScrollY > 500 && lastScrollY < currentScrollY) {
		header.addClass('slideOff');
	} else {
		header.removeClass('slideOff');
	}
	lastScrollY = currentScrollY;
}
