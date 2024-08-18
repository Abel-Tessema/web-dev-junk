function car (type, color, miles) {
	
	this.type = type;
	this.color = color;
	this.miles = miles;
	
}

var car1 = new car ("a compact", "green", "1,024");
var car2 = new car ("a truck", "green", "6,561");
var car3 = new car ("an SUV", "green", "16,384");

function carDetails () {
	
	document.write ("Ashu's car is " + car1.type + " with a " + car1.color + " color. As of now, it has travelled " + car1.miles + " miles.");
	
}