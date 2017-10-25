var max_rainDrops = 1000;
var rainDrops = [];

function rainDrop(x, y, vy, sz, c) {
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.sz = sz;
  this.c = c;
  this.move = function() {
    this.y += this.vy; //속도 붙이고
    if (this.y>windowHeight) this.y = 0; // 땅에 떨어지면 높이 초기화.
  }

  this.render = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 2, this.sz);
  }
}
function setup() { 
  createCanvas(windowWidth, windowHeight);
  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i] = new rainDrop(
      random(0, windowWidth), random(0, windowHeight), random(30, 100), random(30, 100), color(random(100, 255))  );
  }
}

function draw() {
  background(0);

  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i].move();
    rainDrops[i].render();
  }
}
