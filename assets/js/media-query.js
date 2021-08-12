/**
 * The following code applies media query to add css styling in Things to do page and to change html in Home page.
 * Applies changes both on document ready and when the browser is resized.
 * Code credit: https://codepen.io/Midos/pen/LYVpMBP
 */

(function($) {
    function mediaSize() {
        if(window.matchMedia("(max-width: 600px)").matches) {
            // Applies different css styling to the hero image on Things to do page when devices are small            
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
            // Applies changes to the text content of jumbotron container on Home page
            $('#jumbotron-h1').html("Don’t listen to what they say.<br>Go see!");
        } else {
            // Reset for html changes
            $('#jumbotron-h1').html("Don’t listen to what they say. Go see!");
        }
        if(window.matchMedia("(min-width: 1100px)").matches) {
            // Applies changes to margin properties of buttons on Things to do page. Bug: causes a slight jump when the page is loaded.
            $('#buttons-center').addClass('mx-auto');
        } else {
            // Reset for class changes
            $('#buttons-center').removeClass('mx-auto');
        }
    }    
    mediaSize();
    window.addEventListener("resize", mediaSize, false); // Attach the function to the resize event listener
})(jQuery);