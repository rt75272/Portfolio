//Time areas
var theEnd = new Date("May 7, 2021 23:59:59").getTime();
var timeZoneOffset = new Date().getTimezoneOffset() / 60;

//Setup time interval function.
//This function will refresh every second
var x = setInterval(function () {
	//Function to build each time area.
	//i.e. time area for spring, winter, thanksgiving, and the end.
	function timeArea(distance, timeZone) {
		//Initial setup for time macros.
		var days = Math.floor(distance / (1000 * secondsPerHour * 24));
		var hours = Math.floor((distance % (1000 * secondsPerHour * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * secondsPerHour)) / (1000 * 60));
		var daysPerMonth = 30;
		var hrsPerDay = 24;
		var seconds = Math.floor(distance / 1000);

		if (timeZone == "timeZoneEnd2") {
			var hoursOnly = days * hrsPerDay + hours;
			var months = Math.floor(days / daysPerMonth);

			document.getElementById(timeZone).innerHTML = ""
				+ days + " days " + hours + "h " + minutes + "m <br/>"
				+ "================<br/>" + hoursOnly + " hours remaining" + "<br/>"
				+ "================<br/>" + months + " months remaining" + "<br/>"
				+ "================<br/>" + seconds.toLocaleString() + " seconds";
			// Time for <title></title>
			document.getElementById("titleTimeZone").innerHTML = days + " days " + hours + "h " + minutes + "m ";
		}
		// else if(timeZone == "jo") {
		// 	document.getElementById("jo").innerHTML = "<i>&hearts; Jolynne &hearts; </i><br/>";
		// 	document.getElementById("jo").innerHTML += days + " days ";
		// }
		else {
			document.getElementById(timeZone).innerHTML = " <i> Spring Break</i><br/>";
			document.getElementById(timeZone).innerHTML += days + " days " + hours + "h "
				+ minutes + "m ";
		}
	}

	//Distances for each time area.
	var now = new Date().getTime();
	now -= timeZoneOffset;

	// var jNow = (now - jmm);
	var endDistance = (theEnd - now);
	var secondsPerHour = 3600;

	//Time area calls
	timeArea(endDistance, "timeZoneEnd2"); //Time for THE END

	//The next ending dates
	if (endDistance <= 0) {
		clearInterval(x);
		document.getElementById("timeZoneEnd2").innerHTML = "Out of time!";
	}

	//How often to update, in milliseconds ---> 1000 milliseconds equals 1 second.
}, 1000);

var option_zero_wins = option_one_wins = total_runs = 0;

var that = document.getElementById("optionOne").value;
var more = document.getElementById("optionTwo").value;

var temp_that = that;
var temp_more = more;

// Resets to 0 and returns each options' number of wins variable.
function reset_win_ratio() {
	if(temp_more != more || temp_that != that) {
		this.option_zero_wins = 0;
		this.option_one_wins = 0;
		this.total_runs = 0;
		this.temp_that = that;
		this.temp_more = more;
	}
}

function current_winner(x, y, option_zero_name, option_one_name) {
	// var first_option = parseFloat(x);
	// var second_option = parseFloat(y);
	option_zero_name = option_zero_name.toUpperCase();
	option_one_name = option_one_name.toUpperCase();
	var current_leader = "Bill Bob";

	if(x < y) {
		current_leader = option_zero_name + " is in the lead";
	}
	else if(x == y) {
		current_leader = "It's a Tie";
	}
	else if (x > y) {
		current_leader = option_one_name + " is in the lead";
	}
	return current_leader;
}

//Function for decision maker
function makeChoice() {
	that = document.getElementById("optionOne").value;
	more = document.getElementById("optionTwo").value;
	reset_win_ratio();
	temp_that = that;
	temp_more = more;

	// /**Uncomment for testing.**/
	// document.getElementById("tester").innerHTML = "<br/>temp_that: "
	// 	+ temp_that
	// 	+ "<br/>temp_more: "
	// 	+ temp_more;

	if (that == "" || more == "") {
		document.getElementById("decision").innerHTML = "Missing Option(s)";
	}
	else {
		var choice = Math.floor(Math.random() * 2);
		document.getElementById("decision").innerHTML = "bob";

		total_runs++;
		var choice_zero_ratio = 0;
		var choice_one_ratio = 0;
		NUM_DECIMALS = 2;

		if (choice == 0) {
			option_zero_wins++;
			choice_zero_ratio = (option_zero_wins / total_runs) * 100;
			choice_one_ratio = (option_one_wins / total_runs) * 100;
			document.getElementById("decision").innerHTML = more
				+ " won this round"
				+ "<br/><br/>"
				+ more.toUpperCase() + " wins = "
				+ option_zero_wins
				+ " out of "
				+ total_runs
				+ "<br/>"
				+ "Victory rate "
				+ choice_zero_ratio.toFixed(NUM_DECIMALS) + "%"
				+ "<br/><br/>VS<br/><br/>"
				+ that.toUpperCase() + " wins = "
				+ option_one_wins
				+ " out of "
				+ total_runs
				+ "<br/>Victory rate "
				+ choice_one_ratio.toFixed(NUM_DECIMALS) + "%<br/><br/>"
				+ current_winner(option_zero_wins, option_one_wins, that, more);
		}
		else if (choice == 1) {
			option_one_wins++;
			choice_zero_ratio = (option_zero_wins / total_runs) * 100;
			choice_one_ratio = (option_one_wins / total_runs) * 100;
			document.getElementById("decision").innerHTML = that
				+ " won this round"
				+ "<br/><br/>"
				+ that.toUpperCase() + " wins = "
				+ option_one_wins
				+ " out of "
				+ total_runs
				+ "<br/>"
				+ "Victory rate "
				+ choice_one_ratio.toFixed(NUM_DECIMALS) + "%"
				+ "<br/><br/>VS<br/><br/>"
				+ more.toUpperCase() + " wins = "
				+ option_zero_wins
				+ " out of "
				+ total_runs
				+ "<br/>Victory rate "
				+ choice_zero_ratio.toFixed(NUM_DECIMALS) + "%<br/><br/>"
				+ current_winner(option_zero_wins, option_one_wins, that, more);
		}
		else {
			document.getElementById("decision").innerHTML = "Something blew up";
		}
	}
}
