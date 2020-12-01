$(document).ready(function () {
  var headerTopSlider = new Swiper('.header-content__slider', {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.header-content__arrow--next',
      prevEl: '.header-content__arrow--prev',
    },
  })

  $("[data-interact='dropdown']").on('click', function(e){
    e.preventDefault,
    $($(this).attr("data-href")).toggleClass("dropdown-content--show")
  });

  $("[data-interact='toggle-menu']").on('click', function(e){
    e.preventDefault,
    $($(this).attr("data-href")).toggleClass("menu--mobile--visible")
    $(this).toggleClass("menu-btn--header--menu-open")
  });
  $("[data-interact='close-menu']").on('click', function(e){
    e.preventDefault,
    $($(this).attr("data-href")).removeClass("menu--mobile--visible")
  })

});