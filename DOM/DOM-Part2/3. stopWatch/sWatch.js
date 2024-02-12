const timer = document.querySelector('h2')
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

// variables for time values 
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;


// varialbes for leading zero 
let Lmilisec = 0;
let Lsec = 0;
let Lmin = 0;
let Lhour = 0;


// variables for setInterval 
let timerInterval = null;


function stopWatch() {

    milisecond++;

    if (milisecond / 100 === 1) {
        milisecond = 0;
        second++;

        if (second / 60 === 1) {
            second = 0;
            minute++;

            if (minute / 60 === 1) {
                minute = 0;
                hour++;
            }
        }
    }

    // for starting / leading zeros 
    if (milisecond < 10) {
        Lmilisec = '0' + milisecond.toString();
    } else {
        Lmilisec = milisecond;
    }
    if (second < 10) {
        Lsec = '0' + second.toString();
    } else {
        Lsec = second;
    }
    if (minute < 10) {
        Lmin = '0' + minute.toString();
    } else {
        Lmin = minute;
    }
    if (hour < 10) {
        Lhour = '0' + hour.toString();
    } else {
        Lhour = hour;
    }

    timer.innerText = Lhour + " : " + Lmin + " : " + Lsec + " : " + Lmilisec;
}

// calling setInterval function
// window.setInterval(stopWatch, 100)

start.addEventListener('click', function () {

    timerInterval = window.setInterval(stopWatch, 10);
});


stop.addEventListener('click', function () {

    window.clearInterval(timerInterval);
});


reset.addEventListener('click', function () {

    window.clearInterval(timerInterval);
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;

    timer.innerText = "00 : 00 : 00 : 00";

});

