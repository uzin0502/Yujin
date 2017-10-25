//Snowfall//
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(6);
}

function draw() {
	background(108,109,105);
	fill(255);
	noStroke();
	for ( var y=0; y < height; y+=10) {
		var snowX = random(0,width);
		var snowSz = random(5,15);
		ellipse(snowX,y,snowSz,snowSz);
	}
}
