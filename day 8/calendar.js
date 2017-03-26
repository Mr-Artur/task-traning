'use strict';

function Calendar() {
    var date = new Date();
    var month = date.getMonth();
    var days = date.getDate();
    var week = date.getDay();
    var getArea = document.querySelector('.calendar__days');
    
    var arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var setMonth = document.querySelector('.month__text');  
    switch (month) {
        case 0:
        setMonth.innerHTML = arrMonth[0];
        break;
        case 1:
        setMonth.innerHTML = arrMonth[1];
        break;
        case 2:
        setMonth.innerHTML = arrMonth[2];
        break;
        case 3:
        setMonth.innerHTML = arrMonth[3];
        break;
        case 4:
        setMonth.innerHTML = arrMonth[4];
        break;
        case 5:
        setMonth.innerHTML = arrMonth[5];
        break;
        case 6:
        setMonth.innerHTML = arrMonth[6];
        break;
        case 7:
        setMonth.innerHTML = arrMonth[7];
        break;
        case 8:
        setMonth.innerHTML = arrMonth[8];
        break;
        case 9:
        setMonth.innerHTML = arrMonth[9];
        break;
        case 10:
        setMonth.innerHTML = arrMonth[10];
        break;
        case 11:
        setMonth.innerHTML = arrMonth[11];
        break;
    }
    var pusher = function() {
        var currentYear = date.getFullYear();
        var firstDay = new Date(currentYear, month, 1);
        var weekFristDay = firstDay.getDay();      
      
        for (var i = 0; i < weekFristDay;i++) {
          var span = document.createElement('span');
              span.className = 'pusher';
              getArea.appendChild(span);
          }
        };
    var createDays = function() {        
        var arrDay = [];
        pusher();       
        for (var i = 1; i < 32; i++) {
            var span = document.createElement('span'); 
            span.className = 'days';
            span.innerHTML = i;
            arrDay.push(span);
            getArea.appendChild(span);
        }
        arrDay[days-1].style.backgroundColor = "#a3e3aa";        
    }
    this.daysWeek = function() {        
        createDays();
    }
    this.showCalendar = function(show) {
        var show = show;
        var calendar = document.querySelector('.calendar');
        if ( show === true ) {
            calendar.style.display = 'block';
        } else if ( show === false ) {
            calendar.style.display = 'none';
        }
    }
};

var calendar = new Calendar();
calendar.daysWeek();
calendar.showCalendar(false);

(function onFoucs(){
  var input = document.querySelector('.picker__input');
  var body = document.body;
  input.addEventListener('click',function(){      
  calendar.showCalendar(true);
  },true);
 body.addEventListener('click',function(event){
  calendar.showCalendar(false);
  },true);
})();