//Scripts for image 1
var int=self.setInterval(function(){moving()},200);

function moving(){
	//Essential vars
	
	var object = document.getElementById('Move');
	
	var ranposstartleft = Math.random()*1000;
	var ranposstarttop = Math.random()*1000;
		
	//Styles for images
	
	object.style.position = "absolute";
	
	//End Styles for images
	var randomnm = Math.random()*1500 + "px";
	var randomnm2 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object).animate({
			left:randomnm2,
			top:randomnm,
		}, 10000);
	});
}

//Scripts for image 2
var int=self.setInterval(function(){moving1()},200);

function moving1(){
	//Essential vars
	
	var object1 = document.getElementById('Move1');
	
	var ranposstartleft1 = Math.random()*1000;
	var ranposstarttop1 = Math.random()*1000;
	
	//Styles for images
	
	object1.style.position = "absolute";
	
	//End Styles for images
	var randomnm1 = Math.random()*1500 + "px";
	var randomnm21 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object1).animate({
			left:randomnm21,
			top:randomnm1
		}, 10000);
	});
}


//Scripts for image 3
var int=self.setInterval(function(){moving2()},200);

function moving2(){
	//Essential vars
	
	var object2 = document.getElementById('Move2');
	
	var ranposstartleft2 = Math.random()*1000;
	var ranposstarttop2 = Math.random()*1000;
	
	//Styles for images
	
	object2.style.position = "absolute";
	
	//End Styles for images
	var randomnm2 = Math.random()*1500 + "px";
	var randomnm22 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object2).animate({
			left:randomnm22,
			top:randomnm2
		}, 10000);
	});
}

//Scripts for image 4
var int=self.setInterval(function(){moving3()},200);

function moving3(){
	//Essential vars
	
	var object3 = document.getElementById('Move3');
	
	var ranposstartleft3 = Math.random()*1000;
	var ranposstarttop3 = Math.random()*1000;
	
	//Styles for images
	
	object3.style.position = "absolute";
	
	//End Styles for images
	var randomnm3 = Math.random()*1500 + "px";
	var randomnm23 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object3).animate({
			left:randomnm23,
			top:randomnm3
		}, 10000);
	});
}

//Scripts for image 5
var int=self.setInterval(function(){moving4()},200);

function moving4(){
	//Essential vars
	
	var object4 = document.getElementById('Move4');
	
	var ranposstartleft4 = Math.random()*1000;
	var ranposstarttop4 = Math.random()*1000;
	
	//Styles for images
	
	object4.style.position = "absolute";
	
	//End Styles for images
	var randomnm4 = Math.random()*1500 + "px";
	var randomnm24 = Math.random()*1000 + "px";
	
	//Main part of function
	$(document).ready(function(e) {
		$(object4).animate({
			left:randomnm24,
			top:randomnm4
		}, 10000);
	});
}



