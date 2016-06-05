$(document).ready(function(){
	$('.contact-form').on('click', function(){
		$('.modal-cont').fadeIn(200);
	});

	$('.close-modal').on('click', function(){
		$('.modal-cont').fadeOut(200);
	});

	var c = document.getElementById("canvas-river");
	var width = c.width;
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#222222";
	ctx.fillRect(0,0,width,15);
	ctx.fillStyle = "#FFD03B";
	ctx.fillRect(0,15,width,2);
	ctx.fillStyle = "#222222";
	ctx.fillRect(0,17,width,13);
	ctx.fillStyle = "#297e91";
	ctx.fillRect(0,42,width,25);


	ctx.fillStyle = "#AAAAAA";
	ctx.fillRect(0,42,width,5);
	ctx.fillStyle = "#999999";
	ctx.fillRect(0,47,width,15);
});