function changeStyle () {
	
	var parent = document.getElementById ('main');
	var child = parent.childNodes [5];
	child.style.color = "blue";
	
	var child2 = parent.lastElementChild;
	child2.style.color = "darkgreen";
	
	var child3 = parent.firstElementChild;
	child3.style.fontFamily = "Agency FB";
	child3.style.fontSize = "25px";
	
}