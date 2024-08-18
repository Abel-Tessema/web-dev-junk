function changeStyle () {
	
	var text = document.getElementsByTagName ("p");
	
	for (i = 0; i < text.length; i++) {
		
		text [i].style.fontStyle = "italic";
		
	}
	
}


/*

This line of code also works, provided that the condition's number (in this case, 52) is greater than the last node /paragraph index number/.

function changeStyle () {
	
	for (i = 0; i < 52; i++) {
		
		document.getElementsByTagName ("p") [i].style.fontStyle = "italic";
		
	}
	
}

*/