function validateTextbox () {
	
	var box = document.getElementById ('name');
	
	if (box.value == "") {
		
		alert ("The name field cannot be blank.");
		return false;
		
	}
	
}