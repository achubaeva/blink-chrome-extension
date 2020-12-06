var updateTimer = document.getElementById('popup');

function getMainSecond() {
    chrome.storage.sync.get(['mainSecond', 'mainMinute'], function(data){
    updateTimer.innerHTML = data.mainMinute + ":" + data.mainSecond}
    );
    }


var textMainSecond = setInterval(getMainSecond, 1000);



