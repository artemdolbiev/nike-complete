// Fixed header
$(window).scroll(function() {
  let scrl = $(window).scrollTop();
  if(scrl < 60) {
    $('.header-1').removeClass('fixedbar');
  } else {
    $('.header-1').addClass('fixedbar');
  }
});

// Slide
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if(n > slides.length) {
    slideIndex = 1
  }

  if(n < 1){slideIndex = slides.length}
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Popup
(function ($) {
  "use strict";
  $('.anim').magnificPopup({
    typeo: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    perloader: false,
    midClick: true,
    removeDelay: 500,
    mainClass: 'my-mfp-slide-bottom'
  });
})(jQuery);

//Scroll Top
$(window).scroll(function() {
  let height = $(window).scrollTop();
  if(height > 100) {
    $('#top').fadeIn();
  }else {
    $('#top').fadeOut();
  }
});

$(document).ready(function() {
  $("#top").click(function(event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: 0}, "slow");
  });
});

//Scroll
$(function(){
  $('a.smooth-scroll').click(function(enent) {
    event.preventDefault();
    let section = $(this).attr("href");

    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

new WOW().init();