$(document).ready(function(){
	$('#menu-icon').click(function(){
		$('.header').toggleClass('ghost', 500);
		$('#footer, .hide').toggle('slide', {direction: 'left'}, 500);
	//	$('.#footer, .hide').toggleClass('hidden');
	});
});

$(document).ready(function(){
	$('#old-projects').click(function(){
		$('.old').toggle('slide', {direction: 'up'}, 500);
		$('.old').toggleClass('hidden');
		$('.header').toggleClass('new_ghost', 500);
	});
});

