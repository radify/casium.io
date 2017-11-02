/*
*	casium/redux comparison images
**/

var comparisonBtnContainer = $('.comparison-btn-container');
var reduxExample = $('.redux-example');
var casiumExample = $('.casium-example');
var reduxBtn = $('.redux-btn');
var casiumBtn = $('.casium-btn');
reduxBtn.click(()=>{
  reduxExample.addClass('block');
  casiumExample.removeClass('block');
  reduxBtn.addClass('btn-focus');
  casiumBtn.removeClass('btn-focus');
})
casiumBtn.click(() => {
  reduxExample.removeClass('block');
  casiumExample.addClass('block');
  reduxBtn.removeClass('btn-focus');
  casiumBtn.addClass('btn-focus');
});

/*
*	fading in of elements on scroll
**/

var whyReasons = document.getElementsByClassName('why-reason');
window.addEventListener('scroll', function(e) {
  toggleNav(window.scrollY);
  fadeElementsIn();
});
function fadeElementsIn() {
  [].forEach.call(whyReasons, (reason, index) => {
    var reasonBounds = reason.getBoundingClientRect();
		var adjustedScrollPosition = 0.3 * $(window).height() + window.scrollY;
    if (adjustedScrollPosition > reasonBounds.bottom || $(window).height() > 900) {
      whyReasons[index].style.opacity = 1;
    }
  });
}

/*
*	hamburger menu control
**/

var hamburgerBtn = $('.hamburger-btn');
var hamburgerBtnOpen = $('.hamburger-btn-open');
var hamburgerBtnClose = $('.hamburger-btn-close');
hamburgerBtn.click(function() {
  $('.nav').toggleClass('hamburger-show');
  hamburgerBtnOpen.toggleClass('hamburger-btn-show');
  hamburgerBtnClose.toggleClass('hamburger-btn-show');
});

/*
*	header show/hide
**/

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

var faCog = $('.fa-cog');
var performanceAdvantage = document.getElementsByClassName("advantage")[0];
performanceAdvantage.addEventListener("mouseover", () => {
  faCog.addClass('fa-spin')
  setTimeout(()=>{
    faCog.removeClass('fa-spin')
  }, 1500);
});

// removed until we have content
// /*
// *	link arrows jump and return
// **/

// var advantageLinks = document.getElementsByClassName('advantage-link');
// var advantageLinkIcons = document.getElementsByClassName('link-icon');
// (function arrowSlide(){
// 	[].forEach.call(advantageLinks, (link, index) => {
// 		link.addEventListener("mouseover", () => {
// 			advantageLinkIcons[index].classList.add("link-icon-slide")
// 			setTimeout(() => {advantageLinkIcons[index].classList.remove("link-icon-slide")}, 1000)
// 		})
// 	})
// })();
