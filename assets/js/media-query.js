// 1st option

// if (window.matchMedia('(max-width: 600px)').matches)
// {
//     $('#hero-image-outer').css({
//         "height": "35vh", 
//         "width": "100%", 
//         "overflow": "hidden",
//         "position": "relative" 
//     });

//     $('#hero-image').css({
//         "height": "35vh", 
//         "width": "100%", 
//         "background": "url('../images/moscow-view-4.jpg') no-repeat center center",
//         "background-size": "cover" 
//     });
// }


// 2nd option
// Code credit: https://codepen.io/Midos/pen/LYVpMBP

(function($) {
	/*
	 * We need to turn it into a function.
	 * To apply the changes both on document ready and when we resize the browser.
	 */

	function mediaSize() {

		/* Set the matchMedia */

		if (window.matchMedia("(max-width: 750px)").matches) {

			/* Changes when we reach the min-width  */

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
                "background": "url('../assets/images/moscow-view-4.jpg') no-repeat center center",
                "background-size": "cover" 
            });

		} else {

			/* Reset for CSS changes – Still need a better way to do this! */

			$('#hero-image-outer, #hero-image').removeAttr("style");
		}
	}

	/* Call the function */

	mediaSize();

	/* Attach the function to the resize event listener */

	window.addEventListener("resize", mediaSize, false);

})(jQuery);
