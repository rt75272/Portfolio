var canvas = document.getElementById('wall');
var context = canvas.getContext('2d');
var x = Math.floor(Math.random() * (window.innerWidth/2) + 50);
var y = Math.floor(Math.random() * (window.innerHeight/2) + 50);
var dx = 2.5;
var dy = 2.5;

function go() {
	setInterval(ball, 5);
}
function setFullscreen() {
	var width =	context.canvas.width = window.innerWidth;
	var heigth = context.canvas.height = window.innerHeight;
}
function ball() {
	var colour = 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ')';
	context.clearRect(0, 0, window.innerWidth, window.innerHeight)
	context.beginPath();
	if(x < 15 || x > window.innerWidth-15 || y < 15 || y > window.innerHeight-15){context.fillStyle = colour};
	context.arc(x, y, 30, 0, Math.PI*2, true);
	context.fill();
	if(x < 15 || x > window.innerWidth-15) {
		dx=-dx;
		random();
	}
	if(y < 15 || y > window.innerHeight-15) {
		dy=-dy;
		random();
	}
	x+=dx;
	y+=dy;
}
function random() {
	var colour = 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ')';
	var colourHome = 'rgb(' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ',' + (Math.floor(Math.random()*256)) + ')'; 
	$('#wall').css('background-color', colour);
	$('#home').css('color', colourHome);
}

go();
setFullscreen();
window.addEventListener("resize", setFullscreen);