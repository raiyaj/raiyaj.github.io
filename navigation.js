$(document).ready(function (){



  // Declare size-related variables
  var scroll;  //pixels you've scrolled from top
  var docwidth;
  var homeHeight;  //height of div in pixels
  var aboutHeight;
  var navHeight = $('nav ul').height(); //always constant so calculate now



  // Change background/text colour and height of nav bar past home section
  $(window).scroll(function() { // Execute each time you scroll
    scroll = $(window).scrollTop();
    homeHeight = $('#home').height();
    if ($(document).width() >= 800) {
      if (scroll > 100) { // if you've scrolled further than the height of div
        $('nav').css('background','rgba(242,242,242,0.9)');
        $('nav ul li a').css({
          'color': '#878787',
          'padding': '15px 13px 7px 13px'
        });
      } else {
        $('nav').css('background','none');
        $('nav ul li a').css({
          'color': 'white',
          'padding': '35px 13px 7px 13px'
        });
      }
    }
  });



  // Active navigation for desktop and mobile
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    docwidth = $(window).width();
    homeHeight = $("#home").height();
    aboutHeight = $("#about").height();
    var distanceFromBottom = $(document).height() - scroll - $(window).height();

    if (scroll < homeHeight-50) {
      if (docwidth >= 800) {  // desktop
        if (scroll <= 100) {
          $('nav ul #home-nav').removeClass('active-grey');
          $('nav ul #home-nav').addClass('active-white');
        } else {
          $('nav ul #home-nav').addClass('active-white');
          $('nav ul #home-nav').addClass('active-grey');
        }
      } else {  // mobile
        $('nav ul a #home-nav').parent().addClass('active-underline');  // eg. we're targeting the parent (the anchor tag)
                                                                        // of the li with the id 'home-nav'
      }
    } else {
      $('nav ul #home-nav').removeClass('active-white');
      $('nav ul #home-nav').removeClass('active-grey');
      $('nav ul a #home-nav').parent().removeClass('active-underline');  // mobile
    }

    if (scroll >= homeHeight-50 && scroll < homeHeight+aboutHeight+90) {
      if (docwidth >= 800) {
        $('nav ul #about-nav').addClass('active-grey');
      } else {
        $('nav ul a #about-nav').parent().addClass('active-underline');  // mobile
      }
    } else {
      if (docwidth >= 800) {
        $('nav ul #about-nav').removeClass('active-grey');
      } else {
        $('nav ul a #about-nav').parent().removeClass('active-underline');  // mobile
      }
    }

    if (scroll >= homeHeight+aboutHeight+90) {
      if (docwidth >= 800) {
        $('nav ul #projects-nav').addClass('active-grey');
      } else {
        $('nav ul a #projects-nav').parent().addClass('active-underline');  // mobile
      }
    } else {
      if (docwidth >= 800) {
        $('nav ul #projects-nav').removeClass('active-grey');
      } else {
        $('nav ul a #projects-nav').parent().removeClass('active-underline');  // mobile
      }
    }

    if (distanceFromBottom == 0) {
      $('nav ul #about-nav').removeClass('active-grey');
      $('nav ul #projects-nav').addClass('active-grey');
    }
  });



  // Smooth scrolling (desktop)
  $('#about-nav').click(function () {
    $('html, body').animate({
      scrollTop: $('#about').offset().top + 25
    }, 750);
    return false;
  });
  $('#projects-nav').click(function (){
    $('html, body').animate({
      scrollTop: $('#projects').offset().top - 20
    }, 750);
    return false;
  });
  $('#home-nav').click(function (){
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 750);
    return false;
  });



  // Smooth scrolling (mobile)
  $('a #about-nav').click(function() {
    $('.nav-mobile').slideToggle('medium');  // close menu
    $('html, body').animate({
      scrollTop: $('#about').offset().top + 25
    }, 750);
    return false;
  });
  $('a #projects-nav').click(function() {
    $('.nav-mobile').slideToggle('medium');
    $('html, body').animate({
      scrollTop: $('#projects').offset().top - 20
    }, 750);
    return false;
  });
  $('a #home-nav').click(function() {
    $('.nav-mobile').slideToggle('medium');
    $('html, body').animate({
      scrollTop: $('#home').offset().top
    }, 750);
    return false;
  });



  // Hamburger menu toggle for mobile
  $('.nav-mobile').hide();
  $('.handle').click(function() {
    $('.nav-mobile').slideToggle('slow');
  });


});
