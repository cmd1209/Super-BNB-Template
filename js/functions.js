$(document).ready(function() {

  var slideWidth = $('#mobilewrap').outerWidth();
  var activatorWidth = $('.mobileactivator').outerWidth();
  var activator = $('.mobileactivator');
  var mobilewrap = $('#mobilewrap');

  mobilewrap.css({left: -slideWidth-10});

  activator.click(function() {
    if (mobilewrap.is(':visible')) {
      mobilewrap.animate({left: -slideWidth-10},200);
      activator.animate({left: '5px'},200);
      activator.css({position: 'absolute'});
      mobilewrap.delay(200).fadeOut();
    }
    else{
      mobilewrap.show().animate({left: '0'},200);
      activator.animate({left: slideWidth-activatorWidth-5},200);
      activator.css({position: 'fixed'});
    }
  });
});

$(document).ready(function() {
  $(function(){  $('.heroslideshow > div.slides:gt(0)').hide();
  setInterval(function(){
    var rand = Math.floor(Math.random() * ($('.heroslideshow').children().length-1));
    $('.heroslideshow > :first-child').appendTo('.heroslideshow').fadeOut(3250);
    $('.heroslideshow > *').eq(rand).prependTo('.heroslideshow').fadeIn(3250);
  }, 8000);
});
});
