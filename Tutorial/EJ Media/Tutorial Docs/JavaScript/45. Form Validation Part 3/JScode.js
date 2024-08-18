function validateTextbox () {
	
	var box = document.getElementById ('name');
	var box2 = document.getElementById ('email');
	
	if (box.value.length < 7 || box2.value.length < 16) {
		
		alert ("Please enter your full name and your email.");
		return false;
		
		// If one of the boxes has less than the specified number of characters, execute the 'if' statement, i.e. don't validate the form.
		
	}
	
}