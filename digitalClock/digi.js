var date = new Date();

$(document).ready(function(){
  $('#menu-icon').click(function(){
    $('#footer, .hide').toggle('slide', {direction: 'left'}, 1000);
    $('#footer, .hide').toggleClass('hidden');
  });
});

function goTime() {
  var date = new Date();
  var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var time = [date.getHours(), date.getMinutes(), date.getSeconds()]; 
  var nd = 'am';
    if(time[0] === 0) {
      time[0] = '12';
    }
    if(time[0] === 12) {
      time[0] = '12';
      nd = 'pm';
    }
    if(time[0] > 12) {
      time[0] -= 12;
      nd = 'pm';
    }
    if(time[1] < 10) {
     time[1] = '0' + time[1];
   }
   if(time[2] < 10) {
     time[2] = '0' + time[2];
   }
document.getElementById('time').innerHTML =  time[0] + ':' + time[1] + ':';
document.getElementById('sec').innerHTML = time[2];
document.getElementById('ampm').innerHTML = nd;
document.getElementById('date').innerHTML =  months[date.getMonth()] + " " + date.getDate()  + ", " + date.getFullYear();
setTimeout(function() { goTime() }, 500)
}

  var day = date.getDay();
    if(day == 1) {
       $(document).ready(function(){
          $("ul li:first-child").addClass('test');
    });
  }
    else if(day == 2) {
       $(document).ready(function(){
          $("ul li:nth-child(2)").addClass('test');
    });
  }
    else if(day == 3) {
       $(document).ready(function(){
          $("ul li:nth-child(3)").addClass('test');
    });
  } 
    else if(day == 4) {
         $(document).ready(function(){
          $("ul li:nth-child(4)").addClass('test');
    });
  }
    else if(day == 5) {
        $(document).ready(function(){
          $("ul li:nth-child(5)").addClass('test');
    });
  }
    else if(day == 6) {
         $(document).ready(function(){
          $("ul li:nth-child(6)").addClass('test');
    });
  } 
    else {
        $(document).ready(function(){
          $("ul li:nth-child(7)").addClass('test');
    });
  }
