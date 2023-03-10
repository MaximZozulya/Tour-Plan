const hotelSlider = new Swiper('.hotel-slider', {
   // Optional parameters
   loop: true,
   // Navigation arrows
   navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
   },

   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
});

const reviewsSlider = new Swiper('.reviews-slider', {
   // Optional parameters
   loop: true,
   // Navigation arrows
   navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
   },
   // keyboard: {
   //     enabled: true,
   //     onlyInViewport: false,
   // },
});

var menuBotton = document.querySelector(".menu-button");
menuBotton.addEventListener('click', function () {
   console.log('клик по кнопки меню');
   document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});