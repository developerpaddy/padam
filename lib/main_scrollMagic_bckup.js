'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%" // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {

    if(slides[i].classList.contains('has-navbar-fixed-top') !== true){
      console.log(slides[i].classList.contains('has-navbar-fixed-top'));
      new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i], {pushFollowers: false})
      .addTo(controller);
    }
  }

  var slideAnimation = new ScrollMagic.Controller();

  var tl = gsap.timeline();
  // tl.to("#imgSec", {duration: 0.5, scale: "0.65"}, 0.5);
  tl.from("#sec2", {duration: 0.2, opacity: 0}, 0.5);
  tl.to("#sec1_ani", {duration: 0.5, y: "-100%", opacity: 0}, 0.5);
  tl.to("#sec1_bg_trp", {duration: 0.5, opacity: 0}, 0.5);

  var sceneSec2 = new ScrollMagic.Scene({
    triggerElement: "#sec2",
    triggerHook: '0.7'
  })
  .addTween(tl)
  .addIndicators() 
  .addTo(slideAnimation);

  

});