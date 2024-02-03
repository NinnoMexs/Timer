// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let min = document.getElementById('min');
// let sec = document.getElementById('sec');
// let minisec = document.getElementById('minisec');
// let start = document.getElementById('start');
// let pause = document.getElementById('pause');
// let reset = document.getElementById('resest');
// let continuee = document.getElementById('continue');

// let seconds = 58;
// let milliseconds = 0;
// let minute = 45;
// let hour = 55;
// let day = 0;

// function increaseSeconds() {
//         seconds++
//         if (seconds < 10) {
//             sec.innerHTML = "0" + seconds
//         } else {
//             sec.innerHTML = seconds;
//         }
// }

// function increaseMinutes() {
//     minute++;
//     if (minute < 10) {
//         min.innerHTML = "0" + minute
//     } else {
//         min.innerHTML = minute;
//     }
// }

// function increaseHours() {
//     hour++
//     if(hour < 10){
//        hours.innerHTML = "0"+ hour
//    }else{
//     hours.innerHTML = hour;
//    }
// }

// function increaseDays() {
//     day++;
//     if(day < 10){
//         days.innerHTML = "0" + day;
//     }else{
//         days.innerHTML = day;
//     }

// }

// start.onclick = function(){
//     setInterval(() => {
//         if(milliseconds >= 10){
//             milliseconds = 0;
//             increaseSeconds()
//         }
//         milliseconds++
//         minisec.innerHTML=milliseconds;

//         if (seconds >= 59) {
//             seconds  = 0;
//             sec.innerHTML = "00"
//             increaseMinutes()
//         }

//         if(minute >= 59) {
//             minute = 0;
//             min.innerHTML="00";
//             increaseHours()
//         }

//         if(hour >= 60){
//             hour = 0;
//             hours.innerHTML = "00";
//             increaseDays()
//         }

//        if(day >= 1000){
//         day = 0;
//         days.innerHTML = "00";
//        }
//     }, 1);
//     // document.getElementById('start').disabled = true;
// }

// Get elements by their IDs
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');
const minisecElement = document.getElementById('minisec');

// Set initial values for the timer
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;

// Functions to update the timer values
function updateTimer() {
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minElement.textContent = formatTime(minutes);
    secElement.textContent = formatTime(seconds);
    minisecElement.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
        milliseconds += 10;

        if (milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        }

        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes === 60) {
            hours++;
            minutes = 0;
        }

        if (hours === 24) {
            days++;
            hours = 0;
        }

        updateTimer();
    }, 10);
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
}

// Function to continue the timer
function continueTimer() {
    startTimer();
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimer();
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startTimer,);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('continue').addEventListener('click', continueTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Additional functions for pausing, continuing, and resetting
function pauseTimer() {
    clearInterval(timerInterval);
}

function continueTimer() {
    startTimer();
}

function resetTimer() {
    clearInterval(timerInterval);
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimer();
}






