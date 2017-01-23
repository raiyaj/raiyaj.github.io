$(document).ready(function (){


  //Change background and hover colors of nav bar past home section
  $(window).scroll(function() { //Execute each time you scroll
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var ht = $("#home").height(); // height of div in pixels
    if (scroll >= ht) { //if you've scrolled further than the height of div
      $("nav ul").css("background","rgba(0,0,0,0.8)");
      $("nav ul li a").css("color","white");
      $("nav ul li a").mouseenter(function() { //background color change on hover
        $(this).css("background","rgba(0,0,0,0.8)");
      }).mouseleave(function() {
        $(this).css("background","none");
      });
    } else {
      $("nav ul").css("background","rgba(255,255,255,0.6)");
      $("nav ul li a").css("color","black");
      $("nav ul li a").mouseenter(function() { //background color change on hover
        $(this).css("background","rgba(255,255,255,0.7)");
      }).mouseleave(function() {
        $(this).css("background","none");
      });
    }
  });

  //Scrolling
  $("#about-nav").click(function (){
    $('html, body').animate({
      scrollTop: $("#about").offset().top - $("nav ul").height()
    }, 750);
    return false;
  });
  $("#projects-nav").click(function (){
    $('html, body').animate({
      scrollTop: $("#projects").offset().top - $("nav ul").height()
    }, 750);
    return false;
  });
  $("#contact-nav").click(function (){
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 750);
    return false;
  });
  $(".arrow-wrapper").click(function (){
    $('html, body').animate({
      scrollTop: $("#about").offset().top - $("nav ul").height()
    }, 750);
    return false;
  });
  $("#home-nav").click(function (){
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 750);
    return false;
  });


  //Disable background scrolling while popup is open
  $(".pictures").on("click", function() {
    $("body").css("overflow","hidden");
  });
  $(".close").on("click", function() {
    $("body").css("overflow","auto");
  });
  if (window.location.href.indexOf("#front-end-dev") != -1 ||
  window.location.href.indexOf("#back-end-dev") != -1 ||
  window.location.href.indexOf("#mount-baker") != -1) {
  //this if statement is for when the website loads with a popup already open
    $("body").css("overflow","hidden");

  }


  //Click anywhere outside popup to close
  $(document).click(function(e) {  // 'e' is event
    if ((window.location.href.indexOf("#front-end-dev") != -1 ||
    window.location.href.indexOf("#back-end-dev") != -1 ||
    window.location.href.indexOf("#mount-baker") != -1) &&
    !$(e.target).is(".popup") && !$(e.target).parents().is(".popup")) {
    //eg. only if a popup is actually open and if
    //the event (click) is not on .popup, or on any element whose parent is .popup
      location.href = "#/";  //close popup w/o scrolling to top
      $("body").css("overflow","auto");  //enable background scrolling again
      $(".overlay").css("transition","0.4s");  //re-add overlay transition
    }
  });


  //Add fade transition to popups, except for when navigating with prev/next buttons
  $(".pictures, .close").on("click", function() {  //note jQuery target selector syntax for 'or'
    $(".overlay").css("transition","0.4s");
  });
  $(".prev-next").on("click", function() {
    $(".overlay").css("transition","none");
  });



});
