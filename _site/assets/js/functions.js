$(document).ready(function(){

	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();

	$("header h1").fitText(1.0, { minFontSize: '40px', maxFontSize: '72px' });

});
	// Smooth scroll function

function smoothScroll(duration) {

	$('a[href^="#"]').on('click', function (e) {

		var target = $($(this).attr('href'));

		e.preventDefault();
		console.log(target);
		$('html, body').animate({
			'scrollTop': target.offset().top
		}, duration, 'swing');
	});

}



function workBelt(){

	$('.work-container').hide(0);

	$('.thumb-unit').on('click', function(e){
		$('.work-belt').css('left', '-100%');
		$('.work-container').show(500);

	});

	$('.work-return').on('click', function(e){
		$('.work-belt').css('left', '0%');

		$('.work-container').hide(500);
	});

}


function workLoad(){


	$('.thumb-unit').click(function(){

		var $this = $(this),
				newThis = $this.find('strong').text(),
				newFolder = $this.data('folder');

		var spinner = '<div class="loader">Loading...</div>',
				// newHTML = 'work/' + newFolder + '/index.html';
				newHTML = '../work/'+ newFolder + '/index.html';
		$('.project-title').text(newThis);
		$('.project-load').html(spinner).load(newHTML);

	});

}

function clientStuff(){

	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-logo')
	$('.client-mobile-nav').first().addClass('active-logo')




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
