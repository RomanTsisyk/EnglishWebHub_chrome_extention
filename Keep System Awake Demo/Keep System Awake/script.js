document.addEventListener('DOMContentLoaded', function() {
  var channels = [
    { title: "Новини", url: "https://static.censor.net/censornet/rss/rss_uk_news.xml" },
    { title: "Резонанс", url: "https://static.censor.net/censornet/rss/rss_uk_resonance.xml" },
    { title: "Події", url: "https://static.censor.net/censornet/rss/rss_uk_events.xml" },
    { title: "Фото", url: "https://static.censor.net/censornet/rss/rss_uk_photo_news.xml" },
    { title: "Відео", url: "https://static.censor.net/censornet/rss/rss_uk_video_news.xml" },
    { title: "Блоги", url: "https://static.censor.net/censornet/rss/rss_uk_blogs.xml" },
    { title: "Форум", url: "https://static.censor.net/censornet/rss/rss_uk_forum.xml" },
  ];

  var channelListElement = document.querySelector('.channel-list');

  channels.forEach(function(channel) {
    var channelElement = document.createElement('div');
    channelElement.classList.add('channel-item');
    channelElement.textContent = channel.title;
    channelElement.onclick = function() {
      fetchNews(channel.url); // Fetch news for the selected channel
    };
    channelListElement.appendChild(channelElement);
  });
});

function fetchNews(url) {
  const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
  fetch(proxyUrl)
    .then(response => response.json())
    .then(data => {
      displayNews(data.items); // items contains an array of news
    })
    .catch(error => console.error('Error fetching news:', error));
}

function displayNews(newsItems) {
  const newsListElement = document.querySelector('.news-list');
  newsListElement.innerHTML = ''; // Clear news list before updating

  newsItems.forEach(item => {
    const newsItemElement = document.createElement('div');
    newsItemElement.classList.add('news-item');

    // Extracting image source from the CDATA section in the description
    const imgSrcMatch = item.description.match(/<img src="([^"]+)"/);
    const imgSrc = imgSrcMatch ? imgSrcMatch[1] : null;

    // Convert publish date to a more readable format if necessary
    const pubDate = new Date(item.pubDate).toLocaleDateString("ua-UA", {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    // Building the HTML content for the news item
    let newsContentHTML = `
      <div class="news-content">
        <h3>${item.title}</h3>
        <p>${item.description.replace(/<\!--\[CDATA\[|\]\]-->/g, '').replace(/<img[^>]*>/g, '')}</p> <!-- Remove CDATA and img tags -->
        <div class="news-footer">
          <span class="date-published">${pubDate}</span>
        </div>
      </div>
    `;

    // If there is an image, add an img element to the HTML content
    //if (imgSrc) {
    //  newsContentHTML = `<img src="${imgSrc}" alt="News Image" style="width: 128px; height: 128px;">` + newsContentHTML;
    //}

    newsItemElement.innerHTML = newsContentHTML;

    // Add a click handler to open the full news article
    newsItemElement.onclick = function() {
      window.open(item.link, '_blank');
    };

    newsListElement.appendChild(newsItemElement);
  });
}
