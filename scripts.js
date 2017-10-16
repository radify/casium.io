var header = $(".header");
var lastScrollY = 0;

window.addEventListener("scroll", function(e) {
	toggleNav(window.scrollY);
});

function toggleNav(currentScrollY) {
	if (lastScrollY > 500 && lastScrollY < currentScrollY) {
		header.addClass("hide");
	} else {
		header.removeClass("hide");
	}
	lastScrollY = currentScrollY;
}
