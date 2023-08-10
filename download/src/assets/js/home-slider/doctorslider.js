const doctorSlider = new Swiper(".doctorSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  loopedSlides: 1,
  spaceBetween: 30,
  slidesPerView: "auto",
  centeredSlides: true,
  speed: 600,
  parallax: true,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});