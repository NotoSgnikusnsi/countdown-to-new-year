import * as party from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js";

function getRemainingTime() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date();
  const targetTime = new Date(currentYear + 1, 0, 1, 0, 0, 0);

  const remainingTime = ((targetTime - currentTime) / 1000).toFixed(3);

  return remainingTime;
}

function update() {
  const showTimeArea = document.getElementById("time");
  const remainingTime = getRemainingTime();
  if (remainingTime > 31532400) {
    showTimeArea.innerText = 'Happy New Year!';
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.9, y: 0.8 }
    });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.1, y: 0.8 }
    });
    if (intervalTime !== 1000) {
      clearInterval(intervalId);
      intervalTime = 1000;
      intervalId = setInterval(update, intervalTime);
    }
  } else {
    showTimeArea.innerText = remainingTime;
    if (intervalTime !== 1) {
      clearInterval(intervalId);
      intervalTime = 1;
      intervalId = setInterval(update, intervalTime);
    }
  }
}

let intervalId = null;
let intervalTime = 1;

window.onload = () => {
  intervalId = setInterval(update, intervalTime);
};
