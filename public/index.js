function getRemainingTime() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date();
  const targetTime = new Date(currentYear + 1, 0, 1, 0, 0, 0);

  const remainingTime = ((targetTime - currentTime) / 1000).toFixed(3);

  return remainingTime;
}

window.onload = () => {
  const showTimeArea = document.getElementById("time");
  setInterval(() => {
    showTimeArea.innerText = getRemainingTime();
  }, 1);
}
