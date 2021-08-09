/**
 * The following code applies media query to add css styling in Things to do page and to change html in Home page.
 * Code credit: https://codepen.io/Midos/pen/LYVpMBP
 */

 (function($) {
	function mediaSize() {
		if(window.matchMedia("(max-width: 600px)").matches) {
			// Applies changes both on document ready and when we resize the browser.
			$('#hero-image-outer').css({
				"height": "35vh",
				"width": "100%",
				"overflow": "hidden",
				"position": "relative",
				"padding-left": "0",
				"padding-right": "0"
			});
			$('#hero-image').css({
				"height": "35vh",
				"width": "100%",
				"background": "url('assets/images/moscow-view-4-small.jpg') no-repeat center center",
				"background-size": "cover"
			});
		} else {
			// Reset for CSS changes
			$('#hero-image-outer, #hero-image').removeAttr("style");
		}
		if(window.matchMedia("(max-width: 600px) and (min-width: 330px)").matches) {
			// Applies changes on document ready but not when we resize the browser
			$('#jumbotron-h1').html("Don’t listen to what they say.<br>Go see!");
		}
		if(window.matchMedia("(min-width: 1100px)").matches) {
			// Applies changes both on document ready and when we resize the browser
			$('#buttons-center').addClass('mx-auto');
		} else {
			// Reset for class changes
			$('#buttons-center').removeClass('mx-auto');
		}
	}
	// Call the function
	mediaSize();
	// Attach the function to the resize event listener
	window.addEventListener("resize", mediaSize, false);
})(jQuery);