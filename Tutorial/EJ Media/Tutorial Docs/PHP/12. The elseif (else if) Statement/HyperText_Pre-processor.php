<?php

$lb = '<br> <br>';

$num = 528;

if (floor ($num) <> $num) { echo "$num is not an integer."; }

else if ($num % 2 == 0) { echo "$num is an even number."; }

elseif ($num % 2 == 1) { echo "$num is an odd number."; }

?>