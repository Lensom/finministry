$(document).ready(function() {
    // WOW ANIMATION
    new WOW().init();

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
        center:true,
        responsiveClass: true,
        autoWidth: true,
        margin: 30,
        tems: 1,
        loop: true,
        responsive:{
            1440:{
                nav: false,
                dots: true,
                items: 4,
                loop: true,
                margin: 60,
                responsiveClass: false,
                autoWidth:false,
                center:true,

            }
        }
    });

});

