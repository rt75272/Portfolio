var display = function(a) {
	$('#display').val(a);
};

var flash = function(tag) { 
			$(tag).addClass('foo');
			setTimeout(function() {
				$(tag).removeClass('foo').click();
    		}, 100);	
}

var shiftPlus = {16: false, 187: false};
var shiftMultiply = {16: false, 56: false};

window.addEventListener('keydown', function(event){
    var x = event.keyCode;
    var g = "";
    	if(x == 16) {
    		shiftPlus[16] = true;
    		shiftMultiply[16] = true;
    		setTimeout(function(){
    			shiftPlus[16] = false;
    			shiftMultiply[16] = false;
    		}, 500);
    	}
    	if(x in shiftPlus || x === 13 || x === 107) {
    		if(x == 187) { shiftPlus[187] = true; }
    		if(shiftPlus[187] == true && shiftPlus[16] == false || x === 13) {
    			event.preventDefault();
    			g = $('#equal');
				flash(g);
    		}
    		else if(shiftPlus[187] == true && shiftPlus[16] == true || x === 107) {
    			g = $('#plus');
				flash(g);
    		}
    		if(x == 187) { shiftPlus[187] = false; }			
    	}
	    	if(x in shiftMultiply || x === 104 || x === 106 || x === 88) {
	    		if(x == 56) { shiftMultiply[56] = true; }
		    	if(shiftMultiply[56] == true && shiftMultiply[16] == false || x === 104) {
		   			event.preventDefault();
		   			g = $('#eight');
					flash(g);
				}	
	    		else if(shiftMultiply[56] == true && shiftMultiply[16] == true || x === 106) {
	    			g = $('#multiply');
					flash(g);
					}
	    		if(x == 56) { shiftMultiply[56] = false; }	
	    	}

    	if(x === 190 || x === 110) {
    		g = $('#decimal');
    		flash(g);
    	}
    	else if(x === 191 || x === 111) {
    		g = $('#divide');
    		flash(g);
    	}
    	else if(x === 189 || x === 109) {
    		g = $('#subtract');
    		flash(g);
    	}
    	else if(x === 46 || x === 12) {
    		g = $('#ac');
    		event.preventDefault();
			flash(g);
    	}
    	else if (x === 8) {
    		event.preventDefault();
			g = $('#back');
			flash(g);
		}
		else if (x === 48 || x === 96) {
			g = $('#zero');
			flash(g);
		}
		else if(x === 49 || x === 97) {
			g = $('#one');
			flash(g);
		}
		else if(x === 50 || x === 98) {
			g = $('#two');
			flash(g);
		}
		else if(x === 51 || x === 99) {
			g = $('#three');
			flash(g);
		}
		else if(x === 52 || x === 100) {
			g = $('#four');
			flash(g);
		}
		else if(x === 53 || x === 101) {
			g = $('#five');
			flash(g);
		}
		else if(x === 54 || x === 102) {
			g = $('#six');
			flash(g);
		}
		else if(x === 55 || x === 103) {
			g = $('#seven');
			flash(g);
		}
		else if(x === 57 || x === 105) {
			g = $('#nine');
			flash(g);
		}
	});
$(document).ready(function(){
	var value = "";
	$('#ac').click(function(){
		value = "";
		display(value);
	});
	$('#equal').click(function(){
		value = eval(value);
		display(value);
	});
	$('#back').click(function(){
		value = value.toString().slice(0, value.length-1);
		display(value);
	});
	$('button').click(function(){
		value += $(this).val();
		display(value);
	});
});
