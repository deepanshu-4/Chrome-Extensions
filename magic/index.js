console.log("chrome");
var testData = !!document.getElementById("p1");
		if (testData===false)
		{
			var x = document.createElement("button");
			x.setAttribute('id','p1');
	    	var t =  document.createTextNode("Thanos");
	    	x.appendChild(t);
	    	document.body.prepend(x);
	    	document.getElementById("p1").style.cursor = "pointer";
	    	document.getElementById("p1").style.color = "blue";
	    	document.getElementById("p1").style.height = "50px";
	    	// document.getElementById("p1").style.position = "absolute";
	    	document.getElementById("p1").style.marginTop = "60px";
	    	document.getElementById("p1").style.marginLeft = "1%";
	    	document.getElementById("p1").addEventListener('click',fn);
		}
// window.addEventListener('mouseup',fun);

function fun(){
	let stext=window.getSelection().toString().trim();
	console.log(stext);
	if(stext.length>0){
		let msg={
			text:stext
		};	
		chrome.runtime.sendMessage(msg);
		// alert(stext);

	}
}

function fn(){
var cont = 6;for (let i = 0; i <= cont; i++){setTimeout((ix)=>{if(ix%2==0){window.scrollBy({top:6000,behavior:'smooth'});if(ix==6){document.getElementsByTagName("body")[0].style.display = "none";

var x = document.createElement("button");
x.setAttribute('id','p1');
var t =  document.createTextNode("Thanos");
x.appendChild(t);
document.html.prepend(x);
document.getElementById("p1").style.cursor = "pointer";
document.getElementById("p1").style.color = "blue";
document.getElementById("p1").style.height = "50px";
	    	// document.getElementById("p1").style.position = "absolute";
document.getElementById("p1").style.marginTop = "120px";
document.getElementById("p1").style.marginLeft = "80%";

}

}else{window.scrollBy({top:-6000,behavior:'smooth'});}},5000 * i, i)}

}