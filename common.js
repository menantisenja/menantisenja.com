function $e(id) { return document.getElementById(id) }

function UpdateSpan(strID, strNewText) {
	var newTextNode = document.createTextNode(strNewText.toString());
	document.getElementById(strID).replaceChild(newTextNode, document.getElementById(strID).firstChild);
}
function LTrim(str){
	  if (str==null){return null;}
	  for(var i=0;str.charAt(i)==" ";i++);
	  return str.substring(i,str.length);
}
function RTrim(str){
	  if (str==null){return null;}
	  for(var i=str.length-1;str.charAt(i)==" ";i--);
	  return str.substring(0,i+1);
}
function Trim(str){return LTrim(RTrim(str));}

function getQueryVariable(variable) {
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
			 var pair = vars[i].split("=");
			 if (pair[0] == variable) {
					return decodeURIComponent(pair[1]);
			 }
	  } 
	  return "";
}
