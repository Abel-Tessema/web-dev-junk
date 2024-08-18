function changeStyle () {
	
	var text = document.getElementsByClassName ('para');
	
	document.getElementsByTagName ('body') [0].style.backgroundColor = "";
	
	text [0].style.color = "pink";
	text [0].style.backgroundColor = "black";
	
	text [1].style.color = "pink";
	text [1].style.backgroundColor = "black";
	
}

function darkMode () {
	
	document.getElementsByTagName ('body') [0].style.backgroundColor = "black";
	document.getElementsByTagName ('p') [0].style.color = "aqua";
	document.getElementsByTagName ('p') [1].style.color = "aqua";
	
}