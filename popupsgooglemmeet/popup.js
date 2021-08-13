// function sendMessage(){
//         chrome.extension.sendMessage({
//         action: "openNewTab",
//         url: "http://www.deepanshukaushik.me"
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById('btnOpenTab');
//     // onClick's logic below:
//     link.addEventListener('click', function() {
//         sendMessage();
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('btnOpenTab');
	link.addEventListener('click', setAction);

  var lin = document.getElementById('bt');
  lin.addEventListener('click', printdiv);

});

function printdiv() { 
            var divContents = document.getElementById("p").innerHTML; 
            var a = window.open('', '', 'height=500, width=1000'); 
            a.document.write('<html>'); 
           
            a.document.write(divContents); 
            a.document.write('</body></html>'); 
            a.document.close(); 
            a.print(); 
        }


function setAction() {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    chrome.tabs.sendMessage(tabs[0].id, "hello",function(response){
    	   for(var i=0;i<response.length;i++){
                   for(var j=1;j<response[i].length;j++){
                    if(i==1){
                      var htag = document.createElement("hr");
                      var tag = document.createElement("h2");
                       var text = document.createTextNode(response[i][j]);
                       tag.appendChild(text);
                       var element = document.getElementById("val");
                       element.appendChild(tag);
                       element.appendChild(htag);

                    }
                     else{ 
                       var htag = document.createElement("hr"); 
                        var tag = document.createElement("p");
                		   var text = document.createTextNode(response[i][j]);
                		   tag.appendChild(text);
                		   var element = document.getElementById("val");
                		   element.appendChild(tag);
                       element.appendChild(htag);
                     }
             }
        }
    });
  });

}