// Code credit: https://forums.mobirise.com/discussion/26407/iphone-and-background-size-cover


(function($) {

function iOSDetect() {

    $browser = strtolower($_SERVER['HTTP_USER_AGENT']); // Checks the user agent

    if(strstr($browser, 'iphone') || strstr($browser, 'ipad')) {

        $('#moscow-view').removeClass('image-outer-1').addClass('image-outer-1-ios');
    }
}

iOSDetect();

})(jQuery);
   