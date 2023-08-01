const doctorSlider = new Swiper(".doctorSlider", {
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  loop: true,
  // centeredSlides: true,
  // loopedSlides: 1,
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});