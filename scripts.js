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

var whyReasons = document.getElementsByClassName('why-reason');
window.addEventListener('scroll', function(e) {
  toggleNav(window.scrollY);
  fadeElementsIn();
});
function fadeElementsIn() {
  [].forEach.call(whyReasons, (reason, index) => {
    var reasonBounds = reason.getBoundingClientRect();
    if (window.scrollY > reasonBounds.bottom) {
      whyReasons[index].style.opacity = 1;
    }
  });
}

var hamburgerBtn = $('.hamburger-btn');
var hamburgerBtnOpen = $('.hamburger-btn-open');
var hamburgerBtnClose = $('.hamburger-btn-close');
hamburgerBtn.click(function() {
  $('.nav').toggleClass('hamburger-show');
  hamburgerBtnOpen.toggleClass('hamburger-btn-show');
  hamburgerBtnClose.toggleClass('hamburger-btn-show');
});

var header = $('.header');
var lastScrollY = 0;
function toggleNav(currentScrollY) {
  if (lastScrollY > 500 && lastScrollY < currentScrollY) {
    header.addClass('slideOff');
  } else {
    header.removeClass('slideOff');
  }
  lastScrollY = currentScrollY;
}

var advantageLinks = document.getElementsByClassName('advantage-link');
var advantageLinkIcons = document.getElementsByClassName('link-icon');
(function arrowSlide(){
	[].forEach.call(advantageLinks, (link, index) => {
		link.addEventListener("mouseover", () => {
			advantageLinkIcons[index].classList.add("link-icon-slide")
			setTimeout(() => {advantageLinkIcons[index].classList.remove("link-icon-slide")}, 1000)
		})
	})
})();
