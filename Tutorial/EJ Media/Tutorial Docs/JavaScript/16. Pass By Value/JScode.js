function batting (player, distance) {
	
	var sentence = player + " hit the ball " + distance + " feet. <br>";
	document.write (sentence);
	
}

batting ("Steve", 369);

// "Steve" and 369 are called arguments, while player and distance are known as parameters.

// We pass in arguments (copies of 'em, to be exact) in parameters.

function testBatting (player, distance) {
	
	if (distance == 1) {
		
		document.write (player + " hit the ball " + distance + " foot.");
		
	}
	
	else {
		
		document.write (player + " hit the ball " + distance + " feet.");
		
	}
	
}

testBatting ("Steven", 1);