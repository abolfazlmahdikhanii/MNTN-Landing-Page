// script.js
gsap.registerPlugin(ScrollTrigger);

// Select the images
const content = document.querySelector(".content");
const img1 = document.querySelector(".bg-hero__img-1");
const img2 = document.querySelector(".bg-hero__img-2");

gsap.to(img1, {
  yPercent: -15,
  // Adds slight horizontal motion for dynamism
  scale: 1.01, // Slight zoom for depth
  // Gradual fading
  ease: "none",
  scrollTrigger: {
    trigger: "#scene",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// Parallax effect for image 2
gsap.to(img2, {
  yPercent: -20,
  // rotation: -1,
  scale: 1.1,

  ease: "none",
  scrollTrigger: {
    trigger: "#scene",
    start: "top bottom",
    end: "bottom top",
    scrub: 2,
  },
});

// Alternate animations for sections
document.querySelectorAll(".section-content").forEach((section) => {
    const info = section.querySelector(".section-content__info");
    const image = section.querySelector(".section-content__image-img");
  
    // Animate image with rotation and parallax
    gsap.to(image, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom top",
        scrub: 1,
      },
      y: -50,
      rotate: 5, // Slight rotation
      scale: 1.05, // Subtle zoom
    });
  
    // Animate text with a blur effect
    gsap.from(info, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none reverse",
        
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      filter: "blur(10px)", // Start blurred
      clearProps: "filter", // Reset blur after animation
    });
  });
  

// Content text fades in and floats in layers as user scrolls
