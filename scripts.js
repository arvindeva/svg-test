$(function() {
  var year1soil = $('.year1soil');
  var year1soiltop = $('.year1soiltop');
  var rectangle = $('#Rectangle');
  var year1greens = $('.year1greens');
  var year2greens = $('.year2greens');
  var year3greens = $('.year3greens');
  var year4greens = $('.year4greens');
  var year5greens = $('.year5greens');
  var year6greens = $('.year6greens');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      year1soil.addClass('active');
      year1soiltop.addClass('active');
    } else {
      year1soil.removeClass('active');
      year1soiltop.removeClass('active');
    }
    if (scroll >= 500 && scroll < 900) {
      year1greens.addClass('active');
    } else {
      year1greens.removeClass('active');
    }

    if (scroll >= 900 && scroll < 1700) {
      year2greens.addClass('active');
    } else {
      year2greens.removeClass('active');
    }
    if (scroll >= 1300) {
      rectangle.css({ fill: '#40542E', transition: '1.0s' });
    } else {
      rectangle.css({ fill: '#8C613D', transition: '1.0s' });
    }
    if (scroll >= 1700 && scroll < 2100) {
      year3greens.addClass('active');
    } else {
      year3greens.removeClass('active');
    }
    if (scroll >= 2100 && scroll < 2500) {
      year4greens.addClass('active');
    } else {
      year4greens.removeClass('active');
    }
    if (scroll >= 2500 && scroll < 2900) {
      year5greens.addClass('active');
    } else {
      year5greens.removeClass('active');
    }
    if (scroll >= 2900) {
      year6greens.addClass('active');
    } else {
      year6greens.removeClass('active');
    }
  });
});

var path = document.querySelector('path');

var textAnimation = anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1000,
  easing: 'easeInOutSine',
  autoplay: true
});
