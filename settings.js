chrome.windows.onCreated.addListener(function(window){
    chrome.windows.getAll(function(windows){
        var length = windows.length;
        if (length == 2) {
            chrome.tabs.executeScript(null, {file: "content_script.js"});
        }
    });
  });
console.log("Hello");