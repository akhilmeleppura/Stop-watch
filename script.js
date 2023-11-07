let hours = 0;
let minutes = 0;
let seconds = 0;
let display = document.getElementById('display');
let interval;

function startTimer() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
                    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
                    (seconds > 9 ? seconds : "0" + seconds);
}

function startStop() {
  if (!interval) {
    interval = setInterval(startTimer, 1000);
  } else {
    clearInterval(interval);
    interval = false;
  }
}

function reset() {
  clearInterval(interval);
  interval = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.innerHTML = "00:00:00";
}
