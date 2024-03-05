// lambda function
var x = setInterval(function(){
    function timeArea(distance, timeZone) {
        tZone = timeZone;
        var secondsPerHour = 3600;
        var days = Math.floor(distance / (1000 * secondsPerHour * 24));

        document.getElementById(tZone).innerHTML = "<i id='jo_name_title'>" +
            "<span id='heart'>&nbsp;</span>" +
            "Jolynne<span id='normalize_num'></span>" +
            "<span id='heart'>&nbsp;</span>" +
            "</i><br/>";
        document.getElementById(tZone).innerHTML += "<span id='normalize_num'>" + days + "</span>";
    }

    var current_date = new Date();
    var timeZoneOffset = current_date.getTimezoneOffset();
    var md = new Date("October 20, 2019 00:00:01").getTime();

    var now = new Date().getTime();
    now-=timeZoneOffset;
    var meetup_distance = (now - md);

    timeArea(meetup_distance, "jo");

}, 1000);