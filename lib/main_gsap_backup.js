'use strict';

document.addEventListener('DOMContentLoaded', function () {
  
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".pinSec").forEach((pinSec, i) => {
    ScrollTrigger.create({
      trigger: pinSec,
      start: "top top", 
      pin: true, 
      pinSpacing: false 
    });
  });
    
  ScrollTrigger.create({
    snap: 1/3 // snap whole page to the closest section!
  });

  /*  SCENE 1 */
  let scene1 = gsap.timeline();
  ScrollTrigger.create({
      animation: scene1,
      trigger: "#sec2",
      start: "top 90%",
      end: "top top",
      scrub: 0.5,
      markers: true,
  });

  // scene1.fromTo("#imgSec", {scale: "1"}, {
  //   duration: 1, 
  //   scale: "0.65",
  //   ease: "power2.out"
  // }, 
  // 0.1);

  scene1.to("#imgSec", {
    duration: 1, 
    scale: "0.65",
    ease: "power2.out"
  }, 
  0.1);

  scene1.to("#sec1_ani", {
    duration: 1, 
    top: "-100%", 
    opacity: 0
  }, 
  0.1);

  scene1.to("#sec1_bg_trp", {
    duration: 1,
    opacity: 0
  }, 
  0.5);

  /*  SCENE 2 */
  let scene2 = gsap.timeline();
  ScrollTrigger.create({
      animation: scene2,
      trigger: "#sec3",
      start: "top 70%",
      end: "top top",
      scrub: 0.5,
      markers: true,
  });

  // scene2.fromTo("#imgSec", {bottom: 0, scale: "0.65"}, {
  //   duration: 1, 
  //   top: "-80%",
  //   scale: "0.35",
  //   ease: "power2.out"
  // },
  // 0.5);

  scene2.to("#imgSec", {
    duration: 1, 
    top: "-80%",
    scale: "0.35",
    ease: "power2.out"
  },
  0.5);

  scene2.fromTo("#sec2", { top: 0, opacity: 1 }, {
    duration: 1, 
    top: "-100%", 
    opacity: 0,
    ease: "power2.out"
  },
  0.5);

  /*  SCENE 3 */
  let scene3 = gsap.timeline();
  ScrollTrigger.create({
      animation: scene3,
      trigger: "#sec4",
      start: "top bottom",
      end: "top top",
      scrub: 0.5,
      markers: true,
  });

  // scene3.fromTo("#imgSec", {top: "-80%"}, {
  //   duration: 1, 
  //   top: "-100%",
  //   ease: "power2.out"
  // },
  // 0.5);

  scene3.to("#imgSec", {
    duration: 1, 
    top: "-100%",
    ease: "power2.out"
  },
  0.5);

  scene3.fromTo("#sec3", { top: 0, opacity: 1, scale: 1 }, {
    duration: 1, 
    top: "-100%", 
    opacity: 0,
    scale: 0.5,
    ease: "power2.out"
  },
  0.5);

});