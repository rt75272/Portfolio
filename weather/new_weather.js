let url = 'http://api.weatherapi.com/v1/current.json?key=c8a33240f4374aefa68211026222601&q=Tucson&aqi=no';

function autoDetect() {
	$(document).ready(function() {
		var location = "http://ip-api.com/json";
			$.getJSON(location, function(data) {
				var zip = data.zip;
					 $.getJSON("http://api.weatherapi.com/v1/current.json?key=c8a33240f4374aefa68211026222601&q=Tucson&aqi=no", function(data) {
						 display(data);
				});
		 });
	});
}

autoDetect();