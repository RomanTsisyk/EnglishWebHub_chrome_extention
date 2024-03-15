// popup.js
document.addEventListener('DOMContentLoaded', () => {
  fetchRSSFeedsAndUpdateList();
});

function fetchRSSFeedsAndUpdateList() {
  chrome.runtime.sendMessage({ action: "getChannels" }, (response) => {
    if (chrome.runtime.lastError || response.error) {
      // Handle error, show it to the user or log it
      console.error(chrome.runtime.lastError || response.error);
      return;
    }
    
    const channelList = document.getElementById("channel-list");
    channelList.innerHTML = ""; // Clear the channel list

    response.channels.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.title} - Published on: ${item.pubDate}`;
      channelList.appendChild(listItem);
    });
  });
}
