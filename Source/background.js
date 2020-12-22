var website = 'corp' //Defina aqui parte do texto que deve conter no URL alvo 
var url_alvo = ''
chrome.tabs.onActivated.addListener(function (tab) {
  chrome.tabs.query({ active: true }, tabs => {
    setTimeout(() => {
      var url = tabs[0].url;
      url_alvo = url;

    }, 300)
  });
  if (url_alvo.includes(website)) {
    chrome.tabs.update(tab.id, { autoDiscardable: false });
  }
});
chrome.tabs.onHighlighted.addListener(function (tabId) {
  chrome.tabs.query({ active: true }, tabs => {
    setTimeout(() => {
      let url = tabs[0].url;
      url_alvo = url;

    }, 300)
  });
  if (url_alvo.includes(website)) {
    chrome.tabs.update(tabId, { autoDiscardable: false });
  }

});