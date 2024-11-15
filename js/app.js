const slider = document.querySelector(".content-slider__border");
const sliderList = document.querySelector(".content-slider__list");

sliderList.addEventListener("click", (e) => {
  const btn = e.target.closest(".content-slider__link");

  if (!btn) return;
  const btnIndex = e.target.dataset.slide;
  slider.className = `content-slider__border content-slider__border--${btnIndex}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const sectionZero = document.getElementById("zero-section");
  const sectionStart = document.getElementById("start");
  const sectionTow = document.getElementById("Hiking");
  const sectionThird = document.getElementById("key");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
      
        if (entry.isIntersecting) {
          if (entry.target === sectionStart) {
            slider.className = `content-slider__border content-slider__border--${1}`;
          } else if (entry.target === sectionTow) {
            slider.className = `content-slider__border content-slider__border--${2}`;
          } else if (entry.target === sectionThird) {
            slider.className = `content-slider__border content-slider__border--${3}`;
          } else if (entry.target === sectionZero) {
            slider.className = `content-slider__border content-slider__border--${0}`;
          }
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is in view
    }
  );

  // Observe the section
  observer.observe(sectionZero);
  observer.observe(sectionStart);
  observer.observe(sectionTow);
  observer.observe(sectionThird);
});
