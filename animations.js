// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Intro Animation Timeline
const introTl = gsap.timeline();

introTl.to(".loader-name", {
  opacity: 1,
  y: -20,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.5
})
.to(".loader-name", {
  opacity: 0,
  x: -100,
  duration: 0.8,
  ease: "power3.in",
  delay: 0.5
})
.to("#loader", {
  opacity: 0,
  duration: 1,
  ease: "power2.inOut",
  onComplete: () => {
    document.querySelector("#loader").style.display = "none";
    // Initialize reveal animations AFTER intro
    initRevealAnimations();
  }
});

// Initialize reveal animations
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { 
        opacity: 0, 
        y: 40 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out", 
        scrollTrigger: {
          trigger: el,
          start: "top 85%", 
          toggleActions: "play none none none"
        }
      }
    );
  });
}

