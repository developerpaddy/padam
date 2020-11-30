'use strict';

document.addEventListener('DOMContentLoaded', function () {
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#sec1", {
    scrollTrigger: {
    trigger: "#sec1",
    start: "top top",
    pin: true,
    pinSpacing: false
  }
  });

  // gsap.to("#imgSec", {
  //   scrollTrigger: {
  //   trigger: "#imgSec",
  //   start: "top top",
  //   pin: true,
  //   pinSpacing: false
  // }
  // });

  gsap.to("#sec2", {
    scrollTrigger: {
    trigger: "#sec2",
    start: "top top",
    pin: true,
    pinSpacing: false
  }
  });

  var tl = gsap.timeline({
    scrollTrigger: {
    trigger: "#sec2",
    start: "top 70%",
    end: "bottom bottom",
    scrub: true,
  }
  });
  tl.from("#sec2", {duration: 1, opacity: 0});
  tl.to("#sec1_ani", {duration: 5, y: "-100%", opacity: 0}, 0.5);
  tl.to("#sec1_bg_trp", {duration: 3, opacity: 0}, 1);
  tl.to("#imgSec", {duration: 2, scale: "0.65", y: "18%"});

});