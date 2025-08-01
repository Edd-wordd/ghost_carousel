const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
  },
});
