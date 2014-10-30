$(document).ready(function() {

  var slideWidth = $('#mobilewrap').outerWidth();
  var activator = $('.mobileactivator');
  var mobilewrap = $('#mobilewrap');
  var contentwrap = $('.contentwrap');

  activator.click(function() {
    if (mobilewrap.is(':visible')) {
      mobilewrap.animate({left: '-240px'},200);
      activator.animate({left: '5px'},200);
      activator.css({position: 'absolute'});
      mobilewrap.delay(200).fadeOut();
    }
    else{
      mobilewrap.show().animate({left: '0'},200);
      activator.animate({left: '185px'},200);
      activator.css({position: 'fixed'});
    }
  });
});
