var orc = {
	
	hair: "green",
	age: 26,
	stomachFull: true,
	eat: function () {
		document.write ("Yum yum!")
	},
	
}

// var newAge = orc.age + 2;
// document.write (newAge);

// orc.eat ();

orc.stomachFull = false;

if (orc.stomachFull == true) {
	
	orc.eat ();
	
}

else {
	
	document.write ("I'm hungry, boi!");
	
}