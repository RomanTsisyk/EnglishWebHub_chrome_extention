document.getElementById('start').addEventListener('click', function() {
    const timeInterval = document.getElementById('timeInterval').value;
    const url = document.getElementById('url').value;
    chrome.runtime.sendMessage({command: "start", timeInterval: parseFloat(timeInterval), url: url}, function(response) {
        alert(response.result);
    });
});

document.getElementById('stop').addEventListener('click', function() {
    chrome.runtime.sendMessage({command: "stop"}, function(response) {
        alert(response.result);
    });
});
