!(function ($) {
  "use strict";
  var b = $(".timer");
  b.length &&
    b.appear(function () {
      b.countTo();
    }),
    $(window).on("scroll", function () {
      var a = $(".sticky-menu");
      $(window).scrollTop() >= 100 ? a.addClass("fixed") : a.removeClass("fixed");
    }),
    $(window).on("scroll", function () {
      $(this).scrollTop() > 200 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
    }),
    $(".scroll-top").on("click", function () {
      return $("html, body").animate({ scrollTop: 0 }, 1500), !1;
    }),
    $("a.scroll-target").on("click", function () {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
        var a = $(this.hash);
        if ((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({ scrollTop: a.offset().top - 120 }, 1e3), !1;
      }
    });
  var d = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $(".navbar-nav > li  a").each(function () {
    ($(this).attr("href") == d || "" == $(this).attr("href")) && $(this).addClass("active");
  }),
    $(".mixitUp-container").length && mixitup(document.querySelector(".mixitUp-container")),
    $(".user-data-form").length &&
      $(".passVicon").on("click", function () {
        $(".passVicon").toggleClass("eye-slash");
        var a = $(".pass_log_id");
        "password" === a.attr("type") ? a.attr("type", "text") : a.attr("type", "password");
      }),
    $(".companies-logo-slider").length &&
      $(".companies-logo-slider").slick({
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 7,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 991, settings: { arrows: !0, centerMode: !0, slidesToShow: 5 } },
          { breakpoint: 768, settings: { arrows: !0, centerMode: !0, slidesToShow: 3 } },
          { breakpoint: 480, settings: { arrows: !0, centerMode: !0, slidesToShow: 2 } },
        ],
      }),
    $(".partnerSliderTwo").length &&
      $(".partnerSliderTwo").slick({
        centerMode: !0,
        centerPadding: "0px",
        arrows: !1,
        slidesToShow: 5,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { centerMode: !0, slidesToShow: 4 } },
          { breakpoint: 768, settings: { centerMode: !0, slidesToShow: 3 } },
          { breakpoint: 480, settings: { centerMode: !0, slidesToShow: 2 } },
        ],
      }),
    $(".clientSliderOne").length && $(".clientSliderOne").slick({ centerMode: !0, centerPadding: "0px", slidesToShow: 1, prevArrow: $(".prev_c"), nextArrow: $(".next_c"), autoplay: !0, autoplaySpeed: 6e3 }),
    $(".img-slick-slider").length && $(".img-slick-slider").slick({ dots: !0, arrows: !1, centerPadding: "0px", slidesToShow: 1, autoplay: !0, autoplaySpeed: 6e3 }),
    $(".clientSliderTwo").length &&
      $(".clientSliderTwo").slick({
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".teamSliderOne").length &&
      $(".teamSliderOne").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_c"),
        nextArrow: $(".next_c"),
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".clientSliderThree").length && $(".clientSliderThree").slick({ dots: !1, arrows: !0, prevArrow: $(".prevT"), nextArrow: $(".nextT"), centerPadding: "0px", slidesToShow: 1, slidesToScroll: 1, autoplay: !1, autoplaySpeed: 3e3 }),
    $(".clientSliderFour").length &&
      $(".clientSliderFour").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    $(".clientSliderFive").length && $(".clientSliderFive").slick({ centerMode: !0, centerPadding: "0px", slidesToShow: 1, prevArrow: $(".prev_f"), nextArrow: $(".next_f"), autoplay: !0, autoplaySpeed: 6e3 }),
    $(".clientSliderSix").length &&
      $(".clientSliderSix").slick({
        dots: !0,
        arrows: !1,
        centerMode: !0,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    $(".clientSliderSeven").length && $(".clientSliderSeven").slick({ centerMode: !0, centerPadding: "0px", slidesToShow: 1, prevArrow: $(".prev_cs1"), nextArrow: $(".next_cs1"), autoplay: !0, fade: !0, autoplaySpeed: 6e3 }),
    $(".clientSliderEight").length &&
      $(".clientSliderEight").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }),
    $(".app-preview-slider-one").length &&
      $(".app-preview-slider-one").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 3,
        centerMode: !0,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2, centerMode: !1 } },
        ],
      }),
    $(".app-preview-slider-two").length &&
      $(".app-preview-slider-two").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 5,
        centerMode: !0,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".portfolio_slider_one").length &&
      $(".portfolio_slider_one").slick({ dots: !1, arrows: !0, prevArrow: $(".prev_case1"), nextArrow: $(".next_case1"), centerPadding: "0px", slidesToShow: 3, slidesToScroll: 1, autoplay: !1, centerMode: !0, autoplaySpeed: 3e3 }),
    $(".portfolio_slider_two").length &&
      $(".portfolio_slider_two").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_case2"),
        nextArrow: $(".next_case2"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".portfolio_slider_three").length &&
      $(".portfolio_slider_three").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_c"),
        nextArrow: $(".next_c"),
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".product_slider_one").length &&
      $(".product_slider_one").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_p1"),
        nextArrow: $(".next_p1"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !1,
        centerMode: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".product_slider_two").length &&
      $(".product_slider_two").slick({
        dots: !1,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    $("input,textarea").each(function () {
      $(this).data("holder", $(this).attr("placeholder")),
        $(this).on("focusin", function () {
          $(this).attr("placeholder", "");
        }),
        $(this).on("focusout", function () {
          $(this).attr("placeholder", $(this).data("holder"));
        });
    });
  var a = $(".doc-sidebar ul li.dropdown-holder>h4"),
    c = $(".doc-sidebar .sec-menu");
  $(".doc-sidebar ul li.dropdown-holder .expander"),
    a.on("click", function (a) {
      a.preventDefault();
    }),
    a.append(function () {
      return '<span class="expander"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>';
    }),
    a.on("click", function () {
      $(this).parent("li").children("ul").hasClass("show") ? $(this).parent("li").children("ul").removeClass("show") : ($(".sub-menu.show").removeClass("show"), $(this).parent("li").children("ul").addClass("show"));
    }),
    c.on("click", function () {
      $(this).parent("li").children("ul").hasClass("open") ? $(this).parent("li").children("ul").removeClass("open") : ($(".sub-menu.open").removeClass("open"), $(this).parent("li").children("ul").addClass("open"));
    });
  var a = $(".card .card-header");
  a.on("click", function (a) {
    a.preventDefault();
  }),
    a.on("click", function () {
      $(this).parent(".card").children(".collapse").hasClass("show")
        ? $(this).parent(".card").children(".collapse").removeClass("show")
        : ($(".collapse.show").removeClass("show"), $(this).parent(".card").children(".collapse").addClass("show"));
    }),
    $(".main-side-nav").length &&
      $(".main-side-nav a").on("click", function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var a = $(this.hash);
          if ((a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({ scrollTop: a.offset().top - 100 }, 800), !1;
        }
      }),
    $(".theme-main-menu").length &&
      ($(".theme-main-menu .navbar-toggler").on("click", function () {
        $(".navbar-collapse").toggleClass("show"), $(this).toggleClass("open");
      }),
      $(".dropdown-menu .dropdown-toggle").on("click", function (a) {
        return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), !1;
      })),
    $("#one-page-nav .nav-link").on("click", function () {
      $(".navbar-collapse").removeClass("show"), $(".navbar-toggler").removeClass("open");
    }),
    $(".doc-sidebar").length &&
      $(".doc-sidebar .btn").on("click", function () {
        $(".doc-links").toggleClass("show");
      }),
    $(".main-sidebar-nav").length &&
      ($(".sidebar-nav-button").on("click", function () {
        $(".main-sidebar-nav").addClass("show");
      }),
      $(".main-sidebar-nav .close-btn").on("click", function () {
        $(".main-sidebar-nav").removeClass("show");
      })),
    $(".product-value").length &&
      ($(".value-increase").on("click", function () {
        var a = $(this).closest("ul").find(".product-value"),
          b = parseInt(a.val());
        isNaN(b) || a.val(b + 1);
      }),
      $(".value-decrease").on("click", function () {
        var b = $(this).closest("ul").find(".product-value"),
          a = parseInt(b.val());
        !isNaN(a) && a > 1 && b.val(a - 1);
      })),
    $("#credit-card").length &&
      $(".payment-radio-button").on("click", function () {
        $("#credit-card").is(":checked") ? $(".credit-card-form").show(300) : $(".credit-card-form").hide(300);
      }),
    $(".js-tilt").length && $(".js-tilt").tilt({ glare: !0, maxGlare: 0.3 }),
    $("#contact-form").length &&
      ($("#contact-form").validator(),
      $("#contact-form").on("submit", function (a) {
        if (!a.isDefaultPrevented()) {
          var b = "inc/contact.php";
          return (
            $.ajax({
              type: "POST",
              url: b,
              data: $(this).serialize(),
              success: function (a) {
                var b = "alert-" + a.type,
                  c = a.message,
                  d = '<div class="alert ' + b + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + c + "</div>";
                b && c && ($("#contact-form").find(".messages").html(d), $("#contact-form")[0].reset());
              },
            }),
            !1
          );
        }
      })),
    $(window).on("load", function () {
      $("#ctn-preloader").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({ overflow: "visible" }), $("[data-aos]").length && AOS.init({ duration: 1e3, mirror: !0 });
      var a = $(".fancybox");
      if ((a.length && a.fancybox({ arrows: !0, buttons: ["zoom", "slideShow", "thumbs", "close"], animationEffect: "zoom-in-out", transitionEffect: "zoom-in-out" }), $(".map-canvas").length)) {
        var b = new google.maps.Map($(".map-canvas")[0], { zoom: 14, center: new google.maps.LatLng(40.72, -74), mapTypeId: google.maps.MapTypeId.ROADMAP, clickableIcons: !1 });
        new google.maps.Marker({ map: b, draggable: !0, position: new google.maps.LatLng(40.72, -74), visible: !0 });
      }
    });
})(jQuery);
