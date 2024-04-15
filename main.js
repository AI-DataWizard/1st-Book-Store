$(document).ready(function () {
  $("#search-btn").click(function () {
    $(".header .header-1 .search-form").toggleClass("active");
  });

  $("#login-btn").click(function () {
    $(".login-form-con").addClass("active");
    $("#close-login-btn").css("display", "block");
  });

  $("#close-login-btn").click(function () {
    $(".login-form-con").removeClass("active");
    $("#close-login-btn").css("display", "none");
  });

  function loader() {
    $(".loader").addClass("active");
  }

  function fadeOut() {
    setTimeout(loader, 5000);
  }

  fadeOut();

  $(".books-slider").each(function () {
    var swiper = new Swiper(this, {
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });

  $(".featured-slider").each(function () {
    var swiper = new Swiper(this, {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 15,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 3,
        },
        1304: {
          slidesPerView: 5,
        },
      },
    });
  });

  $(".arrivals-slider").each(function () {
    var swiper = new Swiper(this, {
      spaceBetween: 15,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });

  $(".reviews-slider").each(function () {
    var swiper = new Swiper(this, {
      spaceBetween: 15,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });

  $(".blogs-slider").each(function () {
    var swiper = new Swiper(this, {
      spaceBetween: 15,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });
});
