<?php

/* ===== The Four Basic Things About an 'If' Statement ===== */

/*

1 - The 'if' keyword;
2 - The condition in the parentheses;
3 - If the condition is true, the block of code between the curly braces gets executed;
4 - If false, the block of code between the curly braces doesn't get executed.

*/

$linebreak = '<br> <br>';

$num = 343;

if ($num % 7 == 0) {
	
	echo "$num is a multiple of 7." . $linebreak;
	
}

$num++;

if ($num % 7 <> 0) {	// <> means ≠
	
	echo "$num is not a multiple of 7.";
	
}

?>