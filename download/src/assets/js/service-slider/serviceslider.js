const serviceSlider = new Swiper(".serviceSlider", {
  loop: true,
  centeredSlides: true,
  loopedSlides: 1,
  slidesPerView: 1,
  pagination: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }
});