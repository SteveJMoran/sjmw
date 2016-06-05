$(document).ready(function(){
	$('.contact-form').on('click', function(){
		console.log('open: modal')
		$('.modal-cont').fadeIn(200);
	});

	$('.close-modal').on('click', function(){
		$('.modal-cont').fadeOut(200);
	});
});