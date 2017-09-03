$( document ).ready(function() {

		$('a[href^="#"]').on('click', function (e) {

			var target = $($(this).attr('href'));

			e.preventDefault();
			console.log(target);
			$('html, body').animate({
				'scrollTop': target.offset().top
			}, 300, 'swing');
		});

});
