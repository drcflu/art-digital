// switch color area function
function setActiveStyleSheet(title) {
//ps("setActiveStyleSheet");
var i, a, main;  
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
    a.disabled = true;      

    //set user click color style cookie
    if(a.getAttribute("title") == title){
    a.disabled = false;
    var title = getActiveStyleSheet();
    createCookie("style", title, 365);
    } 


   }
 }
}

function getActiveStyleSheet() {
  //ps("getActiveStyleSheet");
  var i, a;  
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {   
     if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) 
         return a.getAttribute("title");  
  }  
  return null;
}

function getPreferredStyleSheet() {
  //ps("getPreferredStyleSheet");
  var i, a;  
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {    
     if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1       && a.getAttribute("title")       )
         return a.getAttribute("title");  
  }
  return null;
}

//create now style cookie
function createCookie(name,value,days) {
  //ps("createCookie-name", name);
  //ps("createCookie-value", value);
  if (days) {
    var date = new Date();    date.setTime(date.getTime()+(days*24*60*60*1000));    var expires = "; expires="+date.toGMTString();  }  else expires = "";  document.cookie = name+"="+value+expires+"; path=/";
}

//read cookie
function readCookie(name) {
  var nameEQ = name + "=";  var ca = document.cookie.split(';');  
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];    while (c.charAt(0)==' ') c = c.substring(1,c.length);    
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);  }
  return null;
}

// init to load default style
var cookie_style = readCookie("style");
var title = cookie_style ? cookie_style : getPreferredStyleSheet();setActiveStyleSheet(title);
