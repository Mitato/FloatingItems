FloatingItems
=============

Insert your images and watch them float around the page randomly forever - great effect using JavaScript and CSS

This is a cool effect i use with people who say they need a cool twist to their site and it's super easy to edit and change
to do whatever you want it to.

All you need to do to make your images fly around instead of the gitHub logo is to go into the HTML where you'll see the code:

<!--Give Each an id of Move1 - Move4, there can be a maximum of 4 Floating Items-->
<img src="media/GitHub-Mark.png" id="Move"/>
<img src="media/GitHub-Mark.png" id="Move1"/>
<img src="media/GitHub-Mark.png" id="Move2"/>
<img src="media/GitHub-Mark.png" id="Move3"/>
<img src="media/GitHub-Mark.png" id="Move4"/>

You can change the links to your images instead and this will just replace the images of the GitHub logo
-Please note that you shouldn't change the id of the image unless you have changed it in the js to do something else.
-If you want less images you can jsyt delete all the spare ones and not worry about the ids
-If you want to add more images - Not recommended as this is a distraction on some sites - then do the following...

Adding More Images:

1. In the HTML add another img tag...

<img src="yourimage.png" id="Move5" />

Make sure that the id is Move5 for this guide but you can change this if you want as long as it continues to correspond
with the other references in the CSS and JS.

2. In the CSS, all you need to do is add in the id to one place - at the top of the file add in your id selector to the
styles area...

#Move, #Move1, #Move2, #Move3, #Move4, #Move5 {
	z-index:-87648237682;
	width: 100px;
	height: auto;
	/*Scale the size down to fit*/
}
Ensure that there is a comma after Move4 and that you have capitals in the right places

3. Now in The JavaScript you need to add in the following - notice that it is an exact duplicate of the other's in the same file
with some subtle but important changes...

//Scripts for image 6
var int=self.setInterval(function(){moving5()},200);

function moving5(){
	//Essential vars
	
	var object5 = document.getElementById('Move5');
	
	var ranposstartleft5 = Math.random()*1000;
	var ranposstarttop5 = Math.random()*1000;
	
	//Styles for images
	
	object5.style.position = "absolute";
	
	//End Styles for images
	var randomnm5 = Math.random()*1500 + "px";
	var randomnm25 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object4).animate({
			left:randomnm25,
			top:randomnm5
		}, 10000);
	});
}

Notice the only things I have changed are:
  - The name of the function and the function reference in the set interval method
  - The variable name (to object5)
  - the Random position variable names
  - the object reference after the Styles for images comment
  - The Two random variables
  - The references to the variables in the last JQuery function

Ensure you do all the above when adding an image to the file.
