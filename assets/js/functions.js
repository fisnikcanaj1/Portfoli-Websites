$(document).ready(function(){

	smoothScroll(300);
	paralexEff();
	workBelt();
	workLoad();
	clientStuff();
	fixNav();
	$("header h1").fitText(1.0, { minFontSize: '30px', maxFontSize: '72px' });
	navToggle();
});
	// Smooth scroll function

function smoothScroll(duration) {

	$('a[href^="#"]').on('click', function (e) {

		var target = $($(this).attr('href'));

		e.preventDefault();
		$('html, body').animate({
			'scrollTop': target.offset().top - 66
		}, duration, 'swing');
	});

}

function paralexEff() {

	var $window = $(window);
	
	$('header[data-type="background"], footer[data-type="background"]').each(function () {

		var $bgobj = $(this);

		$(window).scroll(function () {
			if ($window.width() < 768) {	
				
				var yPos = ($window.scrollTop() / $bgobj.data('speed'));
	
				var cords = '50%' + yPos + 'px';
	
				$bgobj.css({ backgroundPosition: cords });

			}
		});
	});
}


function workBelt(){

	$('.work-container').hide();

	$('.thumb-unit').on('click', function(e){

        $('.work-belt').css({
            'transform': 'translateX(-50%)',
            '-webkit-transform': 'translateX(-50%)',
            '-moz-transform': 'translateX(-50%)',
            '-o-transform': 'translateX(-50%)',
            '-ms-transform': 'translateX(-50%)'
        });
        
		$('.work-container').show(500);

	});

	$('.work-return').on('click', function(e){
        
		$('.work-belt').css({
            'transform': 'translateX(0%)',
            '-webkit-transform': 'translateX(0%)',
            '-moz-transform': 'translateX(0%)',
            '-o-transform': 'translateX(0%)',
            '-ms-transform': 'translateX(0%)'
        });
        
        $('.work-container').hide(500);
        
	});

}


function workLoad(){

	$.ajaxSetup({ cache: false });

	$('.thumb-unit').click(function(){

		var $this = $(this),
				newThis = $this.find('strong').text(),
				newFolder = $this.data('folder');

		var spinner = '<div class="loader">Loading...</div>',
				// newHTML = 'work/' + newFolder + '/index.html';
				newHTML = 'work/'+ newFolder + ".html";
		$('.project-title').text(newThis);
		$('.project-load').html(spinner).load(newHTML);

	});

}

function clientStuff(){

	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-logo')
	$('.client-mobile-nav').first().addClass('active-logo');



  $('.client-logo, .client-mobile-nav').on('click', function(){

		var $this = $(this),
		$siblings = $this.parent().children(),
		position = $siblings.index($this);


		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
		$('.client-logo').removeClass('active-logo').eq(position).addClass('active-logo');
		$('.client-mobile-nav').removeClass('active-logo').eq(position).addClass('active-logo');

	});

  $('.clients-controls-next, .clients-controls-prev').on('click', function(){

		var $this = $(this),
			currentActiveClient = $('.clients-belt').find('.active-client'),
			position = $('.clients-belt').children().index(currentActiveClient);
			clientLen = $('.client-unit').length;

		if ($this.hasClass('clients-controls-next')) {

			if (position < clientLen - 1) {
				$('.active-client').removeClass('active-client').next().addClass('active-client');
				$('.active-logo').removeClass('active-logo').next().addClass('active-logo');
			}
			else {
				$('.client-unit').removeClass('active-client').first().addClass('active-client');
				$('.client-logo').removeClass('active-logo').first().addClass('active-logo');
			}

		}
		else {

			if (position === 0) {
				$('.client-unit').removeClass('active-client').last().addClass('active-client');
				$('.client-logo').removeClass('active-logo').last().addClass('active-logo');
			}
			else {
				$('.active-client').removeClass('active-client').prev().addClass('active-client');
				$('.active-logo').removeClass('active-logo').prev().addClass('active-logo');
			}
		}




	});

}

function fixNav(){
	const SCROLLLIMIT = 50;
	var scrollTop = $(window).scrollTop();

	if (scrollTop > SCROLLLIMIT) {

		$("nav").css("margin-top", "0px");
		$("nav a").css("padding", "15px 0px");
		$("header").addClass("header-top");
		$(".logo").addClass("scrolled");
		$(".nav-logo").addClass("scrolled-header");

	}
	$(window).scroll(function(e) {

		scrollTop = $(this).scrollTop();


		if (scrollTop > SCROLLLIMIT) {

			$("nav").css("margin-top", "0px");
			$("nav a").css("padding", "15px 0px");
			$("header").addClass("header-top");
			$(".logo").addClass("scrolled");
			$(".nav-logo").addClass("scrolled-header");

		}
		else {
			$("nav").css("margin-top", "30px");
			$("nav a").css("padding", "0px");
			$("header").removeClass("header-top");
			$(".logo").removeClass("scrolled");
			$(".nav-logo").removeClass("scrolled-header");

		}
	});

}

function navToggle (){

	$(".toggle-button").on('click', function(){

		$(".nav-bar").toggleClass('show-nav');
		$('.toggle-button').toggleClass('clicked');

	});

}

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

