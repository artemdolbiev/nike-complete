$(window).scroll(function() {
  let scrl = $(window).scrollTop();
  if(scrl < 60) {
    $('.header-1').removeClass('fixedbar');
  } else {
    $('.header-1').addClass('fixedbar');
  }
});