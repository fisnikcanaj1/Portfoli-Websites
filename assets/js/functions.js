$(document).ready(function(){

	smoothScroll(300);
	workBelt();
	workLoad();
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
