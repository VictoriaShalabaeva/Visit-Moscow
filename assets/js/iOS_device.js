// Code credit: https://forums.mobirise.com/discussion/26407/iphone-and-background-size-cover


function iOSDetect() {

    $browser = strtolower($_SERVER['HTTP_USER_AGENT']); // Checks the user agent

    if(strstr($browser, 'iphone') || strstr($browser, 'ipad')) {

        $device = 'iPhone';

    } else { 
        
        $device = 'default'; 
    }	

    return($device);
}

iOSDetect();

if(iOSDetect() == 'iPhone') {

    $('#moscow-view').removeClass('image-outer-1').addClass('image-outer-1-ios');
} 
   