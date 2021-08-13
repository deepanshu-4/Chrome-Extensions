console.log("bg");

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage (message, sender, sendResponse) {
    // alert("dk");
    var ar = ["Google Meet"];
    var sar=["Google Meet"];
    var tar=["Google Meet"];
	var l=document.getElementsByClassName('GDhqjd').length;
	var sl=document.getElementsByClassName('ZjFb7c').length;
		for(var i=0;i<l;i++){
		
			ar.push(document.getElementsByClassName("GDhqjd")[i].innerText)
			
		}

		for(var i=0;i<sl;i++){
			sar.push(document.getElementsByClassName('ZjFb7c')[i].innerText)
			
			
		}
		tar=[ar,sar];

		sendResponse(tar);  // alert(message);
  console.log(message);
}