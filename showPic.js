/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-25 17:03:02
 * @version $Id$
 */
 
/*
window.onload = countBodyChildren;
function countBodyChildren(){
	var bodyElement = document.getElementsByTagName("body")[0];
	alert(bodyElement.nodeType);
}*/

function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

