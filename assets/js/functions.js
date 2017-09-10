$(document).ready(function(){

	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();
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
					newHTML = '/work/' + newFolder + '.html';
			$('.project-title').text(newThis);
			$('.project-load').html(spinner).load(newHTML);

		});

	}

	function clientStuff(){

		$('.client-unit').first().addClass('active-client');
		$('.client-logo').first().addClass('active-logo')




		$('.client-logo').on('click', function(){

			var $this = $(this),
			$siblings = $this.parent().children(),
			position = $siblings.index($this);
			$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
			$('.client-logo').removeClass('active-logo').eq(position).addClass('active-logo');
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
