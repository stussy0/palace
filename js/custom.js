$(function () {
  /* goto button */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("header, .goto").addClass("active");
    } else {
      $("header, .goto").removeClass("active");
    }
  });
});
