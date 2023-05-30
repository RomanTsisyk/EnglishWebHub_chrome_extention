// Time intervals (in minutes)
const workInterval = 25;
const shortBreakInterval = 5;
const longBreakInterval = 15;

// Count of completed work intervals
let count = 0;

// Notification options
const workNotificationOptions = {
  type: 'basic',
  title: 'Productivity Booster',
  message: 'Time to work!',
  iconUrl: 'icon.png'
};

const breakNotificationOptions = {
  type: 'basic',
  title: 'Productivity Booster',
  message: 'Time for a break!',
  iconUrl: 'icon.png'
};

// Sets the alarm and notification for the next interval
function setNextAlarmAndNotification() {
  if (count === 4) {
    chrome.notifications.create(breakNotificationOptions);
    chrome.alarms.create('Break', { delayInMinutes: longBreakInterval });
    count = 0;
  } else if (count > 0) {
    chrome.notifications.create(breakNotificationOptions);
    chrome.alarms.create('Break', { delayInMinutes: shortBreakInterval });
  } else {
    chrome.notifications.create(workNotificationOptions);
    chrome.alarms.create('Work', { delayInMinutes: workInterval });
  }
}

// Handle alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'Work') {
    count++;
    setNextAlarmAndNotification();
  } else if (alarm.name === 'Break') {
    setNextAlarmAndNotification();
  }
});

// Set initial alarm
chrome.runtime.onInstalled.addListener(() => {
  setNextAlarmAndNotification();
});


let timeLeft = workInterval;
let isWorkPeriod = true;

// Update timeLeft every second
setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
  }
}, 1000);

// Respond to message from popup
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.msg === "getTimerState") {
      sendResponse({timeLeft: timeLeft, isWorkPeriod: isWorkPeriod});
    }
  }
);
