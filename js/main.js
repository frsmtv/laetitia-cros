$(document).ready(function(){

    // Mobile menu toggle 
    $('.mob-menu-toggle').click(function(){
        $('#mob-nav').toggleClass('menu-open');
    });

   // **** CAROUSEL ****
    $('.carousel').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        mobileFirst: true,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // **** ACCORDION ****
    $('.accordion').accordion({
        "transitionSpeed": 400
    });

    // GMAPS POINTER EVENTS ACTIVATION
    $('iframe').click(function () {
        console.log('coucou');
        $('iframe').css("pointer-events", "auto");
    });

    $( "iframe" ).mouseleave(function() {
        $('iframe').css("pointer-events", "none");
    });

});
