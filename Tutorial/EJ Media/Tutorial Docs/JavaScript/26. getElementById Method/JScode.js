function changeStyle () {
	
	var text = document.getElementById ("p1").style.color = "blue";
		// document = object
		// getElementById = method
		// style = object
		// color = property
	var text = document.getElementById ("p1").style.backgroundColor = "pink";
	var text = document.getElementById ("p1").style.fontStyle = "italic";
	
}

function removeBC () {
	
	var text = document.getElementById ("p1").style.backgroundColor = "";
	
}

function removeFC () {
	
	var text = document.getElementById ("p1").style.color = "";
	
}

function removeItalics () {
	
	var text = document.getElementById ("p1").style.fontStyle = "";
	
}