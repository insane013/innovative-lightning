$(document).ready(function () {
  var headerTopSlider = new Swiper('.header-content__slider', {
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.header-content__arrow--next',
      prevEl: '.header-content__arrow--prev',
    },
  })

  var cooperateSlider = new Swiper('.we-cooperate__slider', {
    speed: 1000,
    // loop: true,
    // watchOverflow: true,
    autoHeight: true,
    slidesPerView: 4,

    navigation: {
      nextEl: '.we-cooperate__arrow--next',
      prevEl: '.we-cooperate__arrow--prev',
    },

    breakpoints: {
      320:{
        slidesPerView: 1
      },
      700:{
        slidesPerView: 3,
      },
      992:{
        slidesPerView: 4
      },
      1200:{
        spaceBetween: 113,
      }
    }
  })

  var produceSlider = new Swiper('.we-produce__slider', {
    speed: 1000,
    // loop: true,
    // watchOverflow: true,
    autoHeight: true,
    slidesPerView: 4,

    navigation: {
      nextEl: ',we-produce__arrow--next',
      prevEl: '.we-produce__arrow--prev',
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