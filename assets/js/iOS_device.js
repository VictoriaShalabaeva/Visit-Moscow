// The following code identifies iPad and iPhone devices

// Code credit: https://racase.com.np/javascript-how-to-detect-if-device-is-ios/

var isIOS = /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream;

if (isIOS) {

    $('#moscow-view').removeClass('image-outer-1').addClass('image-outer-1-ios');
    $('#moscow-view-3').removeClass('image-outer-3').addClass('image-outer-3-ios');


}