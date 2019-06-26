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
	
	$(function() {
		var target_block = $(".signup-title");
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false;
				$({numberValue: 0}).animate({numberValue: 100}, {
					duration: 2000, 
					easing: "linear",
					step: function(val) {
						$("#lines").html(Math.ceil(val));
						
					}
				});
			}
		});
	});
	


