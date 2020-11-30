'use strict';

document.addEventListener('DOMContentLoaded', function () {
  
  // gsap.registerPlugin(ScrollTrigger);

  gsap.to("#sec1", {
    scrollTrigger: {
    trigger: "#sec1",
    start: "top top",
    pin: true,
    pinSpacing: false
  }
  });

  gsap.to("#sec2", {
    scrollTrigger: {
    trigger: "#sec2",
    start: "top top",
    endTrigger: "#sec3",
    end: "top 80%",
    pin: true,
    pinSpacing: false,
  }
  });

  gsap.to("#imgSec", {
    scrollTrigger: {
      trigger: "#sec2",
      start: "top bottom",
      end: "top 30%",
      scrub: true,
    },
    duration: 0.5, 
    scale: "-=0.35"
  }, 
  0.5);

  gsap.to("#sec1_ani", {
    scrollTrigger: {
      trigger: "#sec2",
      start: "top bottom",
      end: "top 50%",
      scrub: true,
    },
    duration: 0.5, 
    y: "-100%", 
    opacity: 0
  }, 
  0.5);

  gsap.to("#sec1_bg_trp", {
    scrollTrigger: {
      trigger: "#sec2",
      start: "top bottom",
      end: "top 50%",
      scrub: true,
    },
    duration: 0.5,
    opacity: 0
  }, 
  0.5);

  gsap.to("#sec2", {
    scrollTrigger: {
      trigger: "#sec3",
      start: "top 50%",
      end: "top 30%",
      scrub: true,
    },
    duration: 2,
    y: "-100%",
    opacity: 0
  }, 
  1);

  gsap.to("#imgSec", {
    scrollTrigger: {
      trigger: "#sec3",
      start: "top 50%",
      end: "top 30%",
      scrub: true,
    },
      scale: "-=0.35",
      y: "-=80%",
    },
  1);

  // var img_ani = gsap.fromTo("#imgSec", {scale: 0.65}, {scale: 0.35, y: "-80%"});

  // ScrollTrigger.create({
  //   trigger: "#sec3",
  //   start: "top 50%",
  //   scrub: true,
  //   onToggle: self => {
  //     gsap.fromTo("#imgSec", {scale: 0.65}, {scale: 0.35, y: "-80%"})
  //   }
  // });

  gsap.to("#sec3", {
    scrollTrigger: {
    trigger: "#sec3",
    start: "top top",
    endTrigger: "#sec4",
    end: "top 30%",
    pin: true,
    pinSpacing: false,
  }
  });

  gsap.to("#sec3", {
    scrollTrigger: {
    trigger: "#sec4",
    start: "top 50%",
    scrub: true
  },
  scale: "0.4",
  opacity: 0,
  y: "-100%",
  duration: 1
  }, 0.5);

  gsap.to("#imgSec", {
    scrollTrigger: {
    trigger: "#sec4",
    start: "top 50%",
    scrub: true
  },
  opacity: 0,
  y: "-=100%",
  duration: 1
  }, 0.5);

});