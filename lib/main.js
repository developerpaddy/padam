'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var viewportHeight;
  var viewportWidth;
  // if (document.compatMode === 'BackCompat') {
  //     viewportHeight = document.body.clientHeight;
  //     viewportWidth = document.body.clientWidth;
  // } else {
      viewportHeight = $(window).height(); //window.innerHeight; //document.documentElement.clientHeight;
      viewportWidth = window.innerWidth; //document.documentElement.clientWidth;
  // }
  // $('.fullscreen').css('height', viewportHeight);
  // $('.fullscreen').css('width', viewportWidth);
  console.log(viewportWidth + 'X' + viewportHeight)
});