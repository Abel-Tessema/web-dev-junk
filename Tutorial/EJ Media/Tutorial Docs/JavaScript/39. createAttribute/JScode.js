function moreText () {
	
	
	
	// This creates a header.
	
	elementH = document.createElement ('h2');
	
	var divmain = document.getElementById ('main');
	
	divmain.appendChild (elementH);
	
	var textH = document.createTextNode ('Continuing the Ranting…')
	
	elementH.appendChild (textH);
	
	
	
	// This creates a paragraph.
	
	elementP = document.createElement ('p');
	
	divmain.appendChild (elementP);
	
	var textP = document.createTextNode ('Belief is to cover something. If the doubt is too big then you have to stretch the belief into a firm belief. You have to repress your doubt very strongly, because you know that if it is not repressed strongly it will throw off the cover of belief and you will be naked before your own eyes – hence the shock. The shock is not irrelevant.' + '\n\n' + 'If I criticize Mother Teresa, why should you be shocked? Either you see that what I am saying is right and there is no question of shock, or you see that what I am saying is wrong; then too there is no question of shock. From where comes the shock?' + '\n\n' + 'Shock needs two things: one part of you – the deeper part of you, the repressed part of you – sees the truth of what I am saying, and the repressor part of you does not want to see it. This conflict creates the shock.');
	
	elementP.appendChild (textP);
	elementP.style = "white-space: pre-line;";
	
	var pAttribute = document.createAttribute ('id');
	pAttribute.value = "test";
	elementP.setAttributeNode (pAttribute);
	
}



function collapse () {
	
	var rElementH = document.getElementsByTagName ('h2')[1];
	var parent = rElementH.parentNode;
	parent.removeChild (rElementH);
	
	var rElementP = document.getElementsByTagName ('p')[1];
	parent.removeChild (rElementP);

}