/**
 * The following code identifies iPad/iPhone devices and changes css styling of background images on Home page and Contact page.
 * This code was implemented to fix the bug in iOS devices. In particular, CSS property "background-size: cover;" did not work in iOS devices.
 * Code credit: https://racase.com.np/javascript-how-to-detect-if-device-is-ios/ 
 */

 var isIOS = /iPad|iPhone/.test(navigator.userAgent) && !window.MSStream;
 
 if(isIOS) {
     $('#moscow-view').removeClass('image-outer-1').addClass('image-outer-1-ios');
     $('#moscow-view-3').removeClass('image-outer-3').addClass('image-outer-3-ios');
 }