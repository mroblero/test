var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	//Preloader
	$(window).load(function(){
		$('#loader-wrapper').fadeOut('slow',function(){$(this).remove();});
	});
	
	// Slider Height
	var slideHeight = $(window).height();
	$('#home-carousel .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-carousel .item').css('height',slideHeight);
	});
	//Scroll Menu
	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.navbar').addClass('navbar-fixed-top animated fadeIn');
					$('.navbar').removeClass('main-nav');
				} else {
					$('.navbar').removeClass('navbar-fixed-top');
					$('.navbar').addClass('main-nav');
				}
			});
		}else{
			
			$('.navbar').addClass('main-nav');
				
		};
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.top-bar').addClass('top-bar-hide');
				} else {
					$('.top-bar').removeClass('top-bar-hide');
				}
			});
		}else{			
			$('.top-bar').addClass(this);				
		};
		
		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.navbar-brand').addClass('change-logo');
				} else {
					$('.navbar-brand').removeClass('change-logo');
				}
			});
		}else{			
			$('.navbar-brand').addClass(this);				
		}
				
	}

	menuToggle();

	
	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top -79}, 1000);
		return false;
	});
	

	
	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {	
	    $("#testimonial").parallax("30%", 0.3);	
		$("#fun-stuff").parallax("30%", 0.3);
		$("#news-letter").parallax("30%", 0.3);
		$("#twitter").parallax("30%", 0.3);
		$("#portfolio-single").parallax("30%", 0.3);	
	}	
	parallaxInit();			
		
	
	/**** Progress Bar ****/
	    
	$('.skill-circle').bind('inview', loadCharts);

	function loadCharts() {
	    $('.skill-circle').easyPieChart( {
			barColor: '#63153b',
			trackColor: '#933864',
			rotate: '0',
			lineCap: 'butt',
			scaleLength: '0',
			lineWidth: 32,
			size: 185
		});
	}

	
	//Isotope
	var winDow = $(window);
			// Needed variables
	var $container=$('.portfolio-items');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.bind('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').click(function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});
	
	// Nivo Slider
	$(document).ready(function(){
    $('.portfolio-content a').nivoLightbox({ effect: 'fade' });
    });
	
	// Timer
	$('#fun-stuff').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	//Initiat WOW JS
	new WOW().init();
	
	//smoothScroll
	smoothScroll.init();
	
	// Google Map Customization
	(function(){

			// Map Coordination
			var latlng = new google.maps.LatLng(51.498609000000000000,-0.133906000000024500);

			// Map Options
			var myOptions = {
				zoom: 15,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				scrollwheel: false,
				// Google Map Color Styles
				// Google Map Color Styles
				styles: [ 

		{
			"featureType": "road",
			"stylers": [
			{ "color": "#ba97a8" }
			]
		},{
			"featureType": "water",
			"stylers": [
			{ "color": "#ba97a2" }
			]
		},{
			"featureType": "landscape",
			"stylers": [
			{ "color": "#dfb9cb" }
			]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
			{ "color": "#d3cfcf" }
			]
		},{
			"featureType": "poi",
			"stylers": [
			{ "color": "#c086a2" }
			]
		},{
			"elementType": "labels.text",
			"stylers": [
			{ "saturation": 1 },
			{ "weight": 0.1 },
			{ "color": "#000000" }
			]
		}

		]
				};

            var map = new google.maps.Map(document.getElementById('gmap'), myOptions);

			// Marker Image
			var image = 'images/pin.png';
			

		  	// -------------------------- Marker

		  	// Marker Coordination
			var myLatlng = new google.maps.LatLng(51.498609000000000000,-0.133906000000024500);

			var marker = new google.maps.Marker({
				  position: myLatlng,
				  map: map,
				  title: 'Hello!',
				  icon: image
			  });
	}());	
		
});


//TWITTER CONFIGURATION

$(document).ready(function() {

    "use strict";

    function dateFormatter(date) {
        return date.toTimeString();
    }

    twitterFetcher.fetch('521192861014835200', 'twitter', 1, false, false, true, 'default', false);

});


//Notify me 
jQuery(document).ready(function() {
        "use strict";
            $("#notifyMe").notifyMe();
});

//Place Holder
    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });
	
	$('input, textarea').placeholder();