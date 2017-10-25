//Rainy Scene.v2//

var max_rainDrops = 1000;
var rainDrops = [];
var rainSound;
function rainDrop(x, y, vy, sz, c) {
  this.x = x; 
  this.y = y; 
  this.vy = vy; 
  this.sz = sz; 
  this.c = c;
  this.move = function() {
    this.y += this.vy; // 점점 속도를 증가시킵니다.
    if (this.y>windowHeight) this.y = 0; // 비가 땅에 닿으면 y(위치)를 초기화시킵니다.
    if (mouseIsPressed) {
      var xdif = abs(this.x-mouseX); //abs가 뭔지 모르겠다
      if (xdif < 100) {
        var ydif = 0.05*xdif*xdif;
        if ( (this.y- mouseY) > ydif + random(-100, 100)) {
          this.y=0;
        }
      }
    }
  }
  this.render = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 2, this.sz);
  }
}
//function preload() {
  //rainSound = loadSound('rain_inside_house.mp3');
}
function setup() { 
  createCanvas(windowWidth, windowHeight);
  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i] = new rainDrop(
      random(0, windowWidth), random(0, windowHeight), random(30, 100), 
      random(30, 100), color(random(100, 255)) );
  }
  //rainSound.loop();
}
function draw() { 
  background(0);
  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i].move();
    rainDrops[i].render();
  }
}
