/* ---------------------------------------------- /*
 * Header Fixed
/* ---------------------------------------------- */
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	});
/* ---------------------------------------------- /*
* Header End
/* ---------------------------------------------- */


/* ---------------------------------------------- /*
 * Portfolio Filter
/* ---------------------------------------------- */
	var containerEl = document.querySelector('.portfolio-filter');
	var mixer = mixitup(containerEl);
/* ---------------------------------------------- /*
 * Portfolio Filter End
/* ---------------------------------------------- */


(function($){

	$(document).ready(function() {
		/* ---------------------------------------------- /*
		 * Header Scroll 
		/* ---------------------------------------------- */
		$('.header .navbar').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750
		});

		/* ---------------------------------------------- /*
		 * Home Banner Scroll 
		/* ---------------------------------------------- */
		$(".lets-talk").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#contact").offset().top},
		        'slow');
		});

	}); // Document Get Ready End here

	 $(window).load(function() {
	   document.getElementById("loading").style.display = "none"; 
	});


	/* ---------------------------------------------- /*
	 * home Banner
	/* ---------------------------------------------- */
	$(".home-banner").height($(window).height());

	$(window).resize(function(){
		$(".home-banner").height($(window).height());
	});

})(jQuery);