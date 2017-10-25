//Moving Circles

// 우선 최대 원 갯수와 빈 리스트를 만든다
var max_planets = 100; 
var planets = [];
function Planet(x, y, vx, vy, sz, c) { 
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.sz = sz;
  this.c = c;
  this.move = function() {
    // 1) 속도 적용
    // 2) 화면 끝에 닿았을 때 어떻게 할 지 지정
    this.x += this.vx;
    this.y += this.vy;
    if (this.x<0 || this.x>windowWidth) this.vx = -this.vx; 
    if (this.y<0 || this.y>windowHeight) this.vy = -this.vy;
  }
  this.render = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.sz, this.sz);
  }
}
function setup() { 
  // setup에는
  // 1) 캔버스 만들기
  // 2) Array 생성하기 *function Planet 활용
  createCanvas(windowWidth, windowHeight);
  var i;
  for (i=0; i<max_planets; i++) {
    planets[i] = new Planet(
      random(0, windowWidth), random(0, windowHeight), random(-2, 2), random(-2, 2), 
      random(10, 100), color(random(0, 255), 0, 0) );
  }
}
function draw() { 
  // draw에서는
  // 1) 배경색
  // 2) 각 planet마다 움직임과 시각적 특성 부여
  background(0);
  var i;
  for (i=0; i<max_planets; i++) {
    planets[i].move();
    planets[i].render();
  }
}
