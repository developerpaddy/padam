'use strict';

document.addEventListener('DOMContentLoaded', function () {
  
  // gsap.registerPlugin(ScrollTrigger);

  var sec1_pin = gsap.to("#sec1", {
    scrollTrigger: {
    trigger: "#sec1",
    start: "top top",
    pin: true,
    pinSpacing: false
  }
  });

  var sec2_pin = gsap.to("#sec2", {
    scrollTrigger: {
    trigger: "#sec2",
    start: "top top",
    endTrigger: "#sec3",
    end: "top 50%",
    pin: true,
    pinSpacing: false,
  }
  });

  var imgSec_scale_down = gsap.to("#imgSec", {
    scrollTrigger: {
      trigger: "#sec2",
      start: "top bottom",
      end: "top 30%",
      scrub: true,
    },
    duration: 0.5, 
    scale: "0.65"
  }, 
  0.5);

  var sec1_ani = gsap.to("#sec1_ani", {
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

  var sec1_bg_trp = gsap.to("#sec1_bg_trp", {
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

  var sec2 = gsap.to("#sec2", {
    scrollTrigger: {
      trigger: "#sec3",
      start: "top 60%",
      // end: "top 30%",
      scrub: true,
    },
    duration: 3,
    top: "-100%",
    opacity: 0
  }, 
  1);

  var imgSec_scaleDown_up = gsap.to("#imgSec", {
    scrollTrigger: {
      trigger: "#sec3",
      start: "top 70%",
      end: "top 30%",
      scrub: true,
    },
      scale: "-=0.35",
      top: "-80%",
      onUpdate: getTransforms,
    },
  1);
  
  function getTransforms(){
    var ele = document.getElementById("imgSec");
    console.log(ele);
  }
  // var img_ani = gsap.fromTo("#imgSec", {scale: 0.65}, {scale: 0.35, y: "-80%"});

  // ScrollTrigger.create({
  //   trigger: "#sec3",
  //   start: "top 50%",
  //   end: "top 30%",
  //   scrub: true,
  //   onToggle: self => {
  //     gsap.fromTo("#imgSec", {scale: "0.65"}, {
  //       // scrollTrigger: {
  //       //       trigger: "#sec3",
  //       //       start: "top bottom",
  //       //       end: "top 30%",
  //       //       scrub: true,
  //       //     },
  //       duration: 1,
  //       scale: "0.35", 
  //       top: "-80%"
  //     })
  //   }
  // });

  var sec3_pin = gsap.to("#sec3", {
    scrollTrigger: {
    trigger: "#sec3",
    start: "top top",
    endTrigger: "#sec4",
    end: "top 30%",
    pin: true,
    pinSpacing: false,
  }
  });

  var sec3_up = gsap.to("#sec3", {
    scrollTrigger: {
    trigger: "#sec4",
    start: "top 70%",
    end: "top 30%",
    scrub: true
  },
  scale: "-=0.4",
  opacity: 0,
  top: "-=100%",
  duration: 1
  }, 0.5);

  var imgSec_up = gsap.to("#imgSec", {
    scrollTrigger: {
    trigger: "#sec4",
    start: "top 70%",
    end: "top 30%",
    scrub: true
  },
  opacity: 0,
  top: "-=100%",
  duration: 1
  }, 0.5);

  // ScrollTrigger.create({
  //   trigger: "#sec4",
  //   start: "top 70%",
  //   end: "top 30%",
  //   scrub: true,
  //   onToggle: self => {
  //     gsap.fromTo("#imgSec", {opactiy: 1, top: "-80%", scale: "0.35"}, {
  //       // scrollTrigger: {
  //       //       trigger: "#sec3",
  //       //       start: "top bottom",
  //       //       end: "top 30%",
  //       //       scrub: true,
  //       //     },
  //       duration: 1,
  //       opacity: 0,
  //       scale: "0", 
  //       top: "-100%"
  //     })
  //   }
  // });

});