console.log("WElcome");

let filenames = [
"20160620_103045.jpg",
"20160620_103350.jpg",
"20160924_161912.jpg",
"20170103_173327.jpg",
"20161102_161018.jpg",
"DSC_0000008.jpg"
];
let imgs=document.getElementsByTagName('img');
for (imgElt of imgs) {
	let r=Math.floor(Math.random()*filenames.length);
	let file="images/"+filenames[r];
	let url=chrome.extension.getURL(file);
	imgElt.src=url;
	imgElt.srcset=url;
	console.log(url);
}