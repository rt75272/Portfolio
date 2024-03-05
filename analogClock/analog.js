var canvas = document.getElementById('canvas');
var x = canvas.getContext('2d');
var radius = canvas.height / 2;
x.translate(radius, radius);
radius *= 0.85;
setInterval(analog, 500);

function analog() {
	clockBody();
	numbers();
	time();
}

function clockBody() {	
	x.beginPath();
	x.arc(0, 0, radius, 0, Math.PI*2);
	x.fillStyle = '#000';
  x.fill();
	x.beginPath();
	x.arc(0, 0, radius*0.9, 0, Math.PI*2);
	x.strokeStyle = 'cyan';
  x.stroke();
	x.beginPath();
	x.arc(0, 0, radius*.3, 0, Math.PI*2);
	x.strokeStyle = 'cyan';
  x.stroke();
}

function numbers() {
	x.font = radius * 0.1 + 'px "Palatino Linotype"';
	x.textBaseline = 'middle';
	x.textAlign = 'center';
	x.fillStyle = 'cyan';
	for(var num = 1; num < 13; num++) {
		var angle =  num * Math.PI/6;
		x.rotate(angle);
		x.translate(0, -radius*0.5);
		x.rotate(-angle);
		if(num == 1) {
				num = 'I';
			}
			else if(num == 2) {
				num = 'II';
			}
			else if(num == 3) {
				num = 'III';
			}
			else if(num == 4) {
				num = 'IV';
			}
			else if(num == 5) {
				num = 'V';
			}
			else if(num == 6) {
				num = 'VI';
			}
			else if(num == 7) {
				num = 'VII';
			}
			else if(num == 8) {
				num = 'VIII';
			}
			else if(num == 9) {
				num = 'IX';
			}
			else if(num == 10) {
				num = 'X';
			}
			else if(num == 11) {
				num = 'XI';
			}
			else {
				num = 'XII';
		}
		x.fillText(num, 0, 0);
		x.rotate(angle);
		x.translate(0, radius*0.5);
		x.rotate(-angle);
		if(num == 'I') {
				num = 1;
			}
			else if(num == 'II') {
				num = 2;
			}
			else if(num == 'III') {
				num = 3;
			}
			else if(num == 'IV') {
				num = 4;
			}
			else if(num == 'V') {
				num = 5;
			}
			else if(num == 'VI') {
				num = 6;
			}
			else if(num == 'VII') {
				num = 7;
			}
			else if(num == 'VIII') {
				num = 8;
			}
			else if(num == 'IX') {
				num = 9;
			}
			else if(num == 'X') {
				num = 10;
			}
			else if(num == 'XI') {
				num = 11;
			}
			else {
				num = 12;
		}
	}
}

function time() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	
	hour = hour%12;
	
	
	hour = (hour*Math.PI/6)+(min*Math.PI/(6*60))+(sec*Math.PI/(360*60));
	hand(hour, radius * 0.8, radius * 0.02);
	
	min = (min*Math.PI/30)+(sec*Math.PI/(30*60));
	hand(min, radius * 0.7, radius * 0.015);
	
	sec = (sec*Math.PI/30);
	hand(sec, radius * 0.6, radius * 0.01);
	
function hand(time, length, width){
	x.beginPath();
	x.lineWidth = width;
	x.rotate(time);
	x.moveTo(0, -radius*.9);
	x.lineTo(0, -length);
	x.strokeStyle = 'cyan';
	x.stroke();
	x.rotate(-time);	

}
	x.lineWidth = .5;
	x.beginPath();
	x.arc(0, 0, radius*.15, 0, Math.PI*2);
	x.strokeStyle = 'cyan';
	x.stroke();
	
	x.lineWidth = .5;
	x.beginPath();
	x.arc(0, 0, radius*.05, 0, Math.PI*2);
	x.strokeStyle = 'cyan';
	x.stroke();
	
	x.lineWidth = .5;
	x.beginPath();
	x.arc(0, 0, radius*.1, 0, Math.PI*2);
	x.strokeStyle = 'cyan';
	x.stroke();
	
	x.rotate(Math.PI*1.5);	
	x.beginPath();
	x.lineWidth = 3;
	x.arc(0, 0, radius*.15, 0, sec);
	x.strokeStyle = 'cyan';
	x.stroke();
	x.rotate(-Math.PI*1.5);
	
	x.rotate(Math.PI*1.5);	
	x.beginPath();
	x.arc(0, 0, radius*.1, 0, min);
	x.strokeStyle = 'cyan';
	x.stroke();
	x.rotate(-Math.PI*1.5);
	
	x.rotate(Math.PI*1.5);	
	x.beginPath();
	x.arc(0, 0, radius*.05, 0, hour);
	x.strokeStyle = 'cyan';
	x.stroke();
	x.rotate(-Math.PI*1.5);
}