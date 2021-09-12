$(function () {
  $("[data-toggle='popover']").popover({
    html: true,
    content: `<div class="popover-div">
                 <h6>Standard License <span>$49.00</span></h6>
                 <ul class="popover-ul">
                    <li>Use for a single product</li>
                    <li>Non-paying users only</li>
                 </ul>
                 <span>Read the full <a href="#">Standard License</a></span>
              </div>
             <div class="popover-div">
                 <h6>Multisite License <span>$149.00</span></h6>
                 <ul class="popover-ul">
                    <li>Use for a single product</li>
                    <li>Non-paying users only</li>
                 </ul>
                 <span>Read the full <a href="#">Multisite License</a></span>
              </div>
              <div class="popover-div">
                 <h6>Extended License <span>$499.00</span></h6>
                 <ul class="popover-ul">
                    <li>Use for a single product</li>
                    <li>Paying users allowed</li>
                 </ul>
                 <span>Read the full <a href="#">Extended License</a></span>
              </div>`,
  });

  $(".themes i").click(function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }
  });

  $(".our-work ul li").click(function () {
    $(this).siblings().removeClass("active").end().addClass("active");
    if ($(this).data("class") === "all") {
      $(".our-work .card").parent().fadeIn(500);
    } else {
      $(".our-work .card").parent().hide();
      $($(this).data("class")).parent().fadeIn(800);
    }
  });

  setInterval(function () {
    $($(".testimonials .info .carousel-item.active").data("value"))
      .siblings()
      .removeClass("active")
      .end()
      .addClass("active");
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
      $(".navbar").css({
        position: "fixed",
        backgroundColor: "#fff",
        boxShadow: " rgb(219 219 219) 0px 0px 10px",
      });

      $(".navbar .navbar-brand").css({
        color: "rgb(89 89 89)",
        fontWeight: "500",
      });
      $(".navbar .navbar-toggler .navbar-toggler-icon i").css({
        color: "#000",
      });

      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").css({
        color: "rgb(102 102 102)",
      });
      $(".navbar  .navbar-nav .active .nav-link").css({
        color: "#766df4",
      });
      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").mouseenter(
        function () {
          $(this).css({
            color: "#766df4",
          });
        }
      );
      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").mouseleave(
        function () {
          $(this).css({
            color: "rgb(102 102 102)",
          });
        }
      );

      $(".sign .sign-in").css({
        color: "rgb(102 102 102)",
      });
      $(".sign .sign-in").mouseenter(function () {
        $(this).css({
          color: "#766df4",
        });
      });
      $(".sign .sign-in").mouseleave(function () {
        $(this).css({
          color: "rgb(102 102 102)",
        });
      });
    } else {
      $(".navbar").css({
        position: "absolute",
        backgroundColor: "transparent",
        boxShadow: " none",
      });
      $(".navbar .navbar-brand").css({
        color: "#fff",
        fontWeight: 400,
      });
      $(".navbar .navbar-toggler .navbar-toggler-icon i").css({
        color: "#fff",
      });
      $(".navbar .navbar-nav .active .nav-link").css({
        color: "#fff",
      });
      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").css({
        color: "#c4c4c4",
      });
      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").mouseenter(
        function () {
          $(this).css({
            color: "#fff",
          });
        }
      );
      $(".navbar .navbar-nav .nav-item:not('.active') .nav-link").mouseleave(
        function () {
          $(this).css({
            color: "#c4c4c4",
          });
        }
      );

      $(".sign .sign-in").css({
        color: "#c4c4c4",
      });
      $(".sign .sign-in").mouseenter(function () {
        $(this).css({
          color: "#fff",
        });
      });
      $(".sign .sign-in").mouseleave(function () {
        $(this).css({
          color: "#c4c4c4",
        });
      });
    }
  });
  /*
  if ($(window).width() < 992 && $(window).scrollTop() > 500) {
    $(".navbar .sign").css({
      display: "block",
    });
  } else if ($(window).width() < 992 && $(window).scrollTop() < 500) {
    $(".navbar .sign").css({
      display: "none",
    });
  } else if ($(window).width() > 992 && $(window).scrollTop() > 500) {
    $(".navbar .sign").css({
      display: "block",
    });
  } else if ($(window).width() > 992 && $(window).scrollTop() < 500) {
    $(".navbar .sign").css({
      display: "block",
    });
  }

  $(window).on("scroll", function () {
    if ($(window).width() < 992 && $(window).scrollTop() > 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    } else if ($(window).width() < 992 && $(window).scrollTop() < 500) {
      $(".navbar .sign").css({
        display: "none",
      });
    } else if ($(window).width() > 992 && $(window).scrollTop() > 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    } else if ($(window).width() > 992 && $(window).scrollTop() < 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    }
  });
  $(window).on("resize", function () {
    if ($(window).width() < 992 && $(window).scrollTop() > 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    } else if ($(window).width() < 992 && $(window).scrollTop() < 500) {
      $(".navbar .sign").css({
        display: "none",
      });
    } else if ($(window).width() > 992 && $(window).scrollTop() > 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    } else if ($(window).width() > 992 && $(window).scrollTop() < 500) {
      $(".navbar .sign").css({
        display: "block",
      });
    }
  });
  */

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("open");
    if ($(".navbar-toggler").hasClass("open")) {
      $(".heading").css({
        paddingTop: "350px",
      });
    } else {
      $(".heading").css({
        paddingTop: "185px",
      });
    }
  });
});
