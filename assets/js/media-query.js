// The following code applies media query to add css styling to the div on Things to do page
// Code credit: https://codepen.io/Midos/pen/LYVpMBP

(function($) {

    // Applies changes both on document ready and when we resize the browser.

    function mediaSize() {

        /* Set the matchMedia */

        if (window.matchMedia("(max-width: 600px)").matches) {

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
                "background": "url('assets/images/moscow-view-4-small.jpg') no-repeat center center",
                "background-size": "cover"
            });

        } else {

            /* Reset for CSS changes */

            $('#hero-image-outer, #hero-image').removeAttr("style");
        }
    }

    /* Call the function */

    mediaSize();

    /* Attach the function to the resize event listener */

    window.addEventListener("resize", mediaSize, false);

})(jQuery);