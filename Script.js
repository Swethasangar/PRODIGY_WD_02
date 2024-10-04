let start = document.getElementById("start");
let lap = document.getElementById("lap");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let resume = document.getElementById("resume");

// Global Values
let min = (sec = ms = 0),
  startTimer;
let isRunning = false;
let lapcount = 0;

reset.setAttribute("style", "display:none");
resume.setAttribute("style", "display:none");
lap.setAttribute("style", "display:none");
pause.setAttribute("style", "display:none");

// Click function
start.addEventListener("click", () => {
  startTimer = setInterval(runTimer, 10);
  start.setAttribute("style", "display:none");
  reset.setAttribute("style", "display:none");
  resume.setAttribute("style", "display:none");
  lap.setAttribute("style", "display:block");
  pause.setAttribute("style", "display:block");
});

// Reset
reset.addEventListener("click", () => {
  min = sec = ms = 0;
  clearInterval(startTimer);
  laplist.innerHTML = "";
  updateDisplay();
  reset.setAttribute("style", "display:none");
  resume.setAttribute("style", "display:none");
  start.setAttribute("style", "display:block");
});

// Pause
pause.addEventListener("click", () => {
  clearInterval(startTimer);
  updateDisplay();
  pause.setAttribute("style", "display:none");
  resume.setAttribute("style", "display:block");
  lap.setAttribute("style", "display:none");
  reset.setAttribute("style", "display:block");
});

// Resume
resume.addEventListener("click", () => {
  if (!isRunning) {
    startTimer = setInterval(runTimer, 10); // Restart the interval
  }
  pause.setAttribute("style", "display:block");
  lap.setAttribute("style", "display:block");
  reset.setAttribute("style", "display:none");
  resume.setAttribute("style", "display:none");
});

// Lap
let laplist = document.getElementById("lap-list");
lap.addEventListener("click", () => {
  lapcount++;
  let li = document.createElement("li");
  li.innerHTML = `${lapcount < 10 ? "0" + lapcount : lapcount} ${
    min < 10 ? "0" + min : min
  }:${sec < 10 ? "0" + sec : sec}:${ms < 10 ? "0" + ms : ms}`;
  li.style.background = "rgba(255, 255, 255, 0.15)";
  li.style.borderRadius="10px";
  li.style.padding = "5px";
  laplist.appendChild(li);
});


// Timer
let runTimer = () => {
  ms++;
  // console.log(ms)
  if (ms == 100) {
    sec++;
    ms = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  updateDisplay();
};


// Display
function updateDisplay() {
  // Formated Display
  let smin = min < 10 ? "0" + min : min;
  let ssec = sec < 10 ? "0" + sec : sec;
  let sms = ms < 10 ? "0" + ms : ms;
  document.getElementById("min").innerText = smin;
  document.getElementById("sec").innerText = ssec;
  document.getElementById("ms").innerText = sms;
}
