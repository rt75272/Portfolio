var w = $(window).width();
var h = $(window).height();

for(x = 0; x < 100; x++) {
	var genesis = $('<div .container>')
	.addClass('dot')
	.css ({
		top: Math.floor(Math.random()*h),
		left: Math.floor(Math.random()*w)
	})
	.appendTo('.container');
	}
