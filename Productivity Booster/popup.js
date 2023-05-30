document.getElementById('startStopButton').addEventListener('click', () => {
  // Send message to background page when button is clicked
  chrome.runtime.sendMessage({msg: "startStopTimer"}, (response) => {
    if (response.timerStarted) {
      document.getElementById('startStopButton').textContent = "Pause";
    } else {
      document.getElementById('startStopButton').textContent = "Start";
    }
  });
});

// Update timer every second
setInterval(() => {
  // Request timer state from background page
  chrome.runtime.sendMessage({msg: "getTimerState"}, (response) => {
    document.getElementById('timer').textContent = response.timeLeft;
    document.getElementById('status').textContent = response.isWorkPeriod ? "Time to work!" : "Time for a break!";
  });
}, 1000);
