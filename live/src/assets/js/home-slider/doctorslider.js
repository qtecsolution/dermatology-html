const doctorSlider = new Swiper(".doctorSlider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  loop: true,
  centeredSlides: false,
  loopedSlides: 1,
  spaceBetween: 30,
  slidesPerView: "auto",
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});