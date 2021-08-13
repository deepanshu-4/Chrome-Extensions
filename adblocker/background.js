console.log("dk");
chrome.webRequest.onBeforeRequest.addListener(
  function(details) { return {cancel: true}; },
  { urls: ["*://*.doubleclick.net/*","*://*.twitter.com/*"] },
  ["blocking"]
);