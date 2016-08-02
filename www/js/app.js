// Ionic Starter App
'use strict';
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('YouTubeCtrl', [function() {
    // Is only necessary in Android since it is one of
    // the new terms and conditions of Google Play.
    if (ionic.Platform.isAndroid()) {
      // device APIs are available
      // more information on https://cordova.apache.org/docs/en/latest/cordova/events/events.html
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }

    function onPause() {
      // Handle the pause event
      pausePlay('pauseVideo');
    }

    function onResume() {
      // Handle the resume event
      pausePlay('playVideo');
    }

    function pausePlay(state) {
      var frame = document.getElementById("iframeVideo");
      if (frame !== null) {
        var videoYoutube = document.getElementsByTagName("iframe")[0].contentWindow;
        console.debug(videoYoutube);
        videoYoutube.postMessage('{"event":"command","func":"' + state + '","args":""}', '*');
      }
    }

  }]);
