
const rssFeeds = [
  "https://www.wroclaw.pl/dla-mieszkanca/rss",
  "https://www.wroclaw.pl/komunikacja/rss",
  "https://www.wroclaw.pl/kultura/rss",
  "https://www.wroclaw.pl/sport/rss",
  "https://www.wroclaw.pl/przedsiebiorczy-wroclaw/rss",
  "https://www.wroclaw.pl/zielony-wroclaw/rss",
  "https://www.wroclaw.pl/rozmawia/rss",
  "https://www.wroclaw.pl/urzad/rss",
  "https://www.wroclaw.pl/akademicki-wroclaw/rss",
  "https://www.wroclaw.pl/ua/rss"
];

async function fetchRSSFeeds() {
  const channels = [];
  for (const rssFeed of rssFeeds) {
    try {
      const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeed)}`;
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      const items = jsonData.items.map(item => {
        const pubDate = new Date(item.pubDate).toLocaleString('en-US', {
          year: 'numeric', month: 'short', day: 'numeric',
          hour: '2-digit', minute: '2-digit'
        });
        return {
          title: item.title,
          link: item.link,
          pubDate: pubDate
        };
      });
      channels.push(...items);
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
      // Depending on how you want to handle errors, you might want to accumulate them
      // and then send back an error state along with the successfully fetched channels.
    }
  }
  return channels;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getChannels") {
    fetchRSSFeeds().then(channels => {
      sendResponse({ channels: channels, error: null });
    }).catch(error => {
      // Send back an error state so the popup can handle it
      sendResponse({ channels: [], error: error.toString() });
    });
    return true; // Must return true when response is sent asynchronously
  }
});