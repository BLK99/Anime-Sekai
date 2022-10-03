$(function () {
  $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
         $(".fill-screen").css("width", window.innerWidth);
  } );

  $("#video-wallpaper").wallpaper({
    source: {
      poster: "images/sasuke.jpg",
      mp4: "videos/If Anime Itself had a Trailer.mp4"
      // ogg: "",
      // webm: ""
    }
  });

  //Bootstrap scrollspy

  $('body').scrollspy ({
    target: '.navbar'
    // offset: 160
  });

  //Smooth scrolling

  $('nav a, .down-button a,.up-button a').bind('click', function () {
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 105
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //Parallax Scrolling with stellar.js
  $(window).stellar();

});
