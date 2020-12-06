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
      nextEl: '.we-produce__arrow--next',
      prevEl: '.we-produce__arrow--prev',
    },

  })
  var productSpecSlider_1 = new Swiper('.product-spec__slider--spectre', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    clickable: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.product-spec__arrow--next--spectre',
      prevEl: '.product-spec__arrow--prev--spectre',
    },

    pagination: {
      el: '.product-spec__pagination--spectre',
    },

  })
  var productSpecSlider_2 = new Swiper('.product-spec__slider--lense', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    clickable: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.product-spec__arrow--next--lense',
      prevEl: '.product-spec__arrow--prev--lense',
    },

    pagination: {
      el: '.product-spec__pagination--lense',
    },

  })

  var productSpecSlider_3 = new Swiper('.product-spec__slider--ppfd', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    clickable: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.product-spec__arrow--next--ppfd',
      prevEl: '.product-spec__arrow--prev--ppfd',
    },

    pagination: {
      el: '.product-spec__pagination--ppfd',
    },

  })

  var productSpecSlider_4 = new Swiper('.product-spec__slider--construct', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    clickable: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.product-spec__arrow--next--construct',
      prevEl: '.product-spec__arrow--prev--construct',
    },

    pagination: {
      el: '.product-spec__pagination--construct',
    },

  })
  var productSpecSlider_5 = new Swiper('.product-spec__slider--row', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    clickable: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.product-spec__arrow--next--row',
      prevEl: '.product-spec__arrow--prev--row',
    },

    pagination: {
      el: '.product-spec__pagination--row',
    },

  })

  var blogSlider = new Swiper('.blog__slider', {
    speed: 1000,
    loop: true,
    // watchOverflow: true,
    autoHeight: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    navigation: {
      nextEl: '.blog__arrow--next',
      prevEl: '.blog__arrow--prev',
    },

  })

  Change();
  $("[data-interact='tab']").on('click', Change);

  function Change() {
    $("[data-interact='tab']").each(function () {
      // console.log($("[data-interact='tab']"));
      if ($(this).is(':checked')) {
        // console.log("checked");
        $($(this).attr("value")).addClass("product-spec--active");
      } else {        
        $($(this).attr("value")).removeClass("product-spec--active");
      }
    });
    if ($("#tab-2").is(':checked')) {
      // console.log('2 checked');
    }
  }

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