function changeStyle () {
	
	var para2 = document.getElementById ('p2');
	var sibling = para2.nextElementSibling;
	sibling.style.color = "blue";
	
	var sibling2 = para2.previousElementSibling;
	sibling2.style.fontStyle = "italic";
	
}