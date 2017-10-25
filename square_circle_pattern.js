function setup() {
  createCanvas(windowWidth,windowHeight);
}

var mode = 'ELLIPSE'

function draw() {
  background(0,0,0);
  randomSeed(0);
  stroke(255);
  
  var x, y, r;
  var delta = map(mouseX,0,windowWidth,10,100);
  
  for (y=0;y<windowHeight;y+=delta) {
    for (x=0;x<windowWidth;x+=delta) {
      r = random(0,1)
      if (r<0.5) {
        fill(0,0,random(0,255));
        switch (mode) {
          case 'RECT' : rect(x,y,delta,delta);
          break;
          case 'ELLIPSE' : ellipse(x,y,delta,delta);
          break;
        }
      }
    }
  }
}

function keyPressed() {
  switch(key) {
    case '1':mode = 'RECT';
    break;
    case '2':mode = 'ELLIPSE';
    break;
    default: mode = 'NONE';
    break;
  }
  print(mode);
}