function changeStyle () {
	
	var child = document.getElementById ('p1');
	var parent = child.parentNode; // or child.parentElement
	parent.style.fontFamily = "Comic Sans MS";
	parent.style.fontSize = ".8em";
	
}