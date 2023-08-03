const blogSlider = new Swiper(".blogSlider", {
  loop: true,
  // centeredSlides: true,
  slidesPerView: 1,
  pagination: false,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }
});