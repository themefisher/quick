$(function(){


	/* ========================================================================= */
	/*  Init WOW js for css3 animation
	/* ========================================================================= */

	var wow = new WOW({
	    mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();
	
    var windowHeight = $(window).height();

    $(".fullscreen").css("height", windowHeight);

    $(window).scroll(function() {
    	if ($(window).scrollTop() >= 85) {
    		$(".site-header").addClass("fixed");
    	}else {
    		$(".site-header").removeClass("fixed");
    	}
    });

    $("#banner-slider").owlCarousel({
        autoPlay: true,
        items: 1,
        dots: false,
        nav: false
    });


    $("#case-study-slider, .testimonial-slider").owlCarousel({
        autoPlay: true,
        items: 1,
        dots: false,
        nav: false
    });


    $('.inline-popup').magnificPopup({
        type: 'inline',
        gutter:'20',
        midClick: true,
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    
});



$(window).load(function() {

    $("#preloader").fadeOut("slow");
});


                    








