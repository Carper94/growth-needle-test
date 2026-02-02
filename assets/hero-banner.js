document.addEventListener('DOMContentLoaded', function () {
  // Swiper: Slider
  new Swiper('.hero-banner--testimonial__wrapper', {
    loop: false,
    navigation: {
      nextEl: `.hero-banner--testimonial__wrapper .swiper-button-next`,
      prevEl: `.hero-banner--testimonial__wrapper .swiper-button-prev`,
    },
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    pagination: {
      el: '.hero-banner--testimonial__wrapper .swiper-pagination',
      clickable: true
    },
  });
})