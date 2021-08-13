window.word="";
chrome.runtime.onMessage.addListener(rec);

function rec(request,sender,sendResponse){
	console.log(request.text);
	window.word=request.text;
}