const serviceSlider = new Swiper(".serviceSlider", {
  loop: true,
  centeredSlides: false,
  loopedSlides: 1,
  slidesPerView: 1,
  pagination: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }
});