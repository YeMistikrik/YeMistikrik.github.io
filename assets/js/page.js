(function($) {

    "use strict";

    /*
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // Slick Nav
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
    });


    /*
       CounterUp
       ========================================================================== */
    $('.counter').counterUp({
        time: 600
    });


    /*
       VIDEO POP-UP
       ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


    /*
     SMOOTH SCROLL
     ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

    /*
       Back Top Link
       ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })

    /* Nivo Lightbox
      ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });


    /* stellar js
      ========================================================*/
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });

    /*
       Page Loader
       ========================================================================== */
    $('#loader').fadeOut();

}(jQuery));

