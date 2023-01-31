gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.to("#main_img", {
    rotate: -15,
    scrollTrigger:{
        trigger:"#main_img",
        scroller:"#main",
        // markers:true,
        start: "top 10%",
        end: "top -422%",
        pin:true,
        scrub:true
    },
})

gsap.to("#main_img", {
  scale: 0.3,
  scrollTrigger:{
      trigger:".page_5 h1",
      scroller:"#main",
      // markers:true,
      start: "top 440%",
      end: "top -422%",
      scrub:true,
  },
})

gsap.from("#nav_top", {
  y:-100,
  opacity:0,
  duration:2,
})

gsap.from("#nav_left", {
  opacity:0,
  duration:4,
})

gsap.from("#main_img", {
  scale:2,
  opacity:0,
  duration:1,
})

gsap.from(".page_1>img", {
  opacity:0,
  scale:0.3,
  duration:1.5,
})

gsap.from("#page_2_left", {
  opacity:0,
  duration:1.2,
  scrollTrigger:{
    trigger:"#volume",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#page_2_right", {
  opacity:0,
  duration:1.2,
  scrollTrigger:{
    trigger:"#volume",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".page_3_top>h1", {
  opacity:0,
  duration:1.5,
  scrollTrigger:{
    trigger:".page_3_top",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#page3_bottom_left", {
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page3_bottom_right",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#page3_bottom_right", {
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page3_bottom_right",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#drop_content_1", {
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#drop_content_1",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#drop_content_2", {
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#drop_content_1",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#drop_content_3", {
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#drop_content_1",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#vine_img img", {
  scale:1.5,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#drop_content_3",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".page_5>h1", {
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".page_5>h1",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from("#bottles_imgs_wrapper", {
  scale:0.9,
  opacity:0,
  duration:1.5,
  scrollTrigger:{
    trigger:".page_5>h1",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".clutter", {
  scale:0.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".page_6_img_1_info",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})

gsap.from(".page_6_bottles", {
  scale:0.5,
  opacity:0,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:".page_6_img_1_info",
    scroller:"#main",
    start:"top 60%",
    // markers:true
  }
})