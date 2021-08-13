console.log("bg");

/*
chrome.browserAction.onClicked.addListener(buttonClick);
function buttonClick(tab){
	console.log(tab);
	chrome.tabs.sendMessage(tab.id,msg);
}

*/
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse)
    { 
        if (request.action == "openNewTab")
            chrome.tabs.create({ url: request.url });
    }
);