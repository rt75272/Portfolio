
var display = function(a) {
	var temp = Math.round(a.current.temp_f);
	var tempC = Math.round(temp-32*5/9);
	var basic = a.current_observation.weather;
	var image = a.current_observation.icon_url;
	var logo = a.current_observation.image.url;
	var city = a.current_observation.display_location.full;
		$('#general').html(basic);
		$("#fahrenheit").html(temp + " °F");
		$("#celsius").html(tempC + " °C");
		$("#city").html(city);
		$('#pic').html("<img src=" + image + ">");
		$('#footer').html("<div id='foot-cont'>Powered by: <br>" + "<img src=" + logo + "></div>");
			if(temp < 50) {
				$(".toggle").css('color', 'blue');
			}
			else if(temp > 49 && temp < 90) {
				$(".toggle").css('color', 'orange');
			}
			else {
				$(".toggle").css('color', 'red');
			} 
};

function autoDetect() {
	$(document).ready(function() {
		var location = "http://ip-api.com/json";
			$.getJSON(location, function(data) {
				var zip = data.zip;
					 $.getJSON("http://api.wunderground.com/api/55107946f4c08dd1/conditions/q/" + zip + ".json", function(data) {
						 display(data);
				});
		 });
	});
}

function search() {		
	var query = document.getElementById("citi").value;
		$(document).ready(function() {
		 $.getJSON("http://api.wunderground.com/api/55107946f4c08dd1/conditions/q/" + query +".json", function(data) {
				if (data.response.results == null) {
						display(data);
				}
				else {
					query = data.response.results[0].l;
					 $.getJSON("http://api.wunderground.com/api/55107946f4c08dd1/conditions" + query +".json", function(data) {
							display(data);
					});
				}
 		});
	});
}

$(".switch").click(function(){
	$('.toggle').toggle();
});
