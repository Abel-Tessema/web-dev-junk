function validateTextbox () {
	
	var box = document.getElementById ('name');
	var box2 = document.getElementById ('email');
	
	if (box.value.length < 7 && box2.value < 16) {
		
		alert ("Please enter your full name and your email.");
		box.focus ();	// Puts the cursor on the name textbox.
		box.style.border = "solid 3px red";
		return false;
		
		// If both of the boxes has less than the specified number of characters, execute the 'if' statement, i.e. don't validate the form. But it seems it submits the form regardless of anything we input, except blank for both. Hmm…
		
	}
	
}