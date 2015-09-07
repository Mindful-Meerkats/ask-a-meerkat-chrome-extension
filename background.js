chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://orschiro.typeform.com/to/K9pwp0";
  chrome.tabs.create({ url: newURL });
});
