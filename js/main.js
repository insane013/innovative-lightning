$(document).ready(function () {
  var headerTopSlider = new Swiper('.header-content__slider', {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.header-content__arrow--next',
      prevEl: '.header-content__arrow--prev',
    },
  })
});