$(document).ready(function(){

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

});