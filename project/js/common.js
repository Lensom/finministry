$(document).ready(function() {
    // WOW ANIMATION
    new WOW().init();

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        nav: true,
        dots: true,
        items: 2,
        loop: true,
        margin: 60,
        rewindNav: false,
        responsiveClass: true,
        autoWidth:true,
        // responsive:{
        //     600:{
        //         items:4
        //     }
        // }
    });

});


