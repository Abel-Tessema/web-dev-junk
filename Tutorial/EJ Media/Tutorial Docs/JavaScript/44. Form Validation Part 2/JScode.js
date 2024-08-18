function validateTextbox () {
	
	var box = document.getElementById ('name');
	var box2 = document.getElementById ('email');
	
	if (box.value == "" || box2.value == "") {
		
		alert ("The fields cannot be blank.");
		return false;
		
		// If one of the boxes is empty, execute the 'if' statement, i.e. don't validate the form.
		
	}
	
}