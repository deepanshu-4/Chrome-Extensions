let bword=chrome.extension.getBackgroundPage();
document.getElementById('h').innerHTML=bword.word;
console.log(bword.word);