import * as party from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2/dist/confetti.browser.min.js";
function getRemainingTime() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date();
  const targetTime = new Date(currentYear + 1, 0, 1, 0, 0, 0);

  const remainingTime = ((targetTime - currentTime) / 1000).toFixed(3);

  return remainingTime;
}

window.onload = () => {
  const showTimeArea = document.getElementById('time');
  setInterval(() => {
    const remainingTime = getRemainingTime();
    if (remainingTime > 31532400) {
      showTimeArea.innerText = 'Happy New Year!';
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.8, y: 0.8 }
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.2, y: 0.8 }
      });
    } else {
      showTimeArea.innerText = remainingTime;
    }
  }, 1);
};
