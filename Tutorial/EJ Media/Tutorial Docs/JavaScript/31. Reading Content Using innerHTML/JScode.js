function combineText () {
	
	var text = document.getElementsByClassName ('para');
	
	firstPara = text [0].innerHTML;
	secondPara = text [1].innerHTML;
	
	var addThem = text [2].innerHTML = firstPara + secondPara;
	
	// var addThem = text [2].innerHTML = text [0].innerHTML + text [1].innerHTML;
	
	var firstPara = text [0].innerHTML = "";
	var firstPara = text [1].innerHTML = "";
	
}