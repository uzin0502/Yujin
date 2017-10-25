//Slash Pattern2//
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  randomSeed(0);

  var x, y, r;
  var delta = 50;

  var backSlashProb = map(mouseX, 0, windowWidth, 0, 1);
  var backSlashThickness = map(mouseY, 0, windowHeight, 3, 30);

  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      r = random(0, 1);
      if (r<backSlashProb) {
        stroke(255, 0, 255);
        strokeWeight(backSlashThickness);
        line(x, y, x+delta, y+delta);
      } else {
        stroke(0);
        strokeWeight(1);
        line(x+delta, y, x, y+delta);
      }
    }
  }
}
