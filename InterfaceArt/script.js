//let value = false;
let bgR = 150;
let bgG = 150;
let bgB = 150;
function setup() {
  let canvas= createCanvas(2000, 1000);
  canvas.parent("myContainer");

}

function changeBGColor() {
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
}
function draw() {
  if(value=true){
    noLoop;
  }

  background(90,180, 370, 20);
  let x1 = frameCount % width;
  let amp = 310;
  let y1 = sin(frameCount * 0.01) * amp;

  noStroke();
  fill(255);
  translate();
  ellipse(100, 200, 300, 120);
  ellipse(200, 200, 300, 100);
  ellipse(600, 100, 300, 130);
  ellipse(500, 100, 300, 100);
  ellipse(900, 200, 300, 100);
  ellipse(1000, 200, 300, 100);
  ellipse(1400, 50, 300, 145);
  ellipse(1300, 50, 300, 140);
  ellipse(1800, 200, 300, 100);
  ellipse(1700, 200, 300, 120);
  fill(100, 190, 100);
  rect(0, 900, 4000, 100);
  strokeWeight(10);
  stroke(0);

  drawFigure(x1, y1, 0.001, 0.8);
}
function drawFigure(x1, y1, spd, scl) {
  legs(x1, y1, spd, scl);
  arms(x1, y1, spd, scl);
  body(x1, y1, spd, scl);
  cheeks(x1, y1, spd, scl);
  eyes(x1, y1, spd, scl);
  mouth(x1, y1, spd, scl);
}
function legs(x, y, spd, scl) {
  push();
  translate(x, y);
  fill(bgR, bgG, bgB);
  scale(scl);
  if (y < 280) {
    ellipse(351, 701, 144, 263);
    ellipse(651, 701, 144, 263);
  } else if (y < 1000)
    ellipse(351, 701, 263, 144) & ellipse(651, 701, 263, 144);
  pop();
}
function arms(x, y, spd, scl) {
  push();
  translate(x, y);

  fill(bgR, bgG, bgB);
  scale(scl);
  if (y < 280) {
    ellipse(290, 295, 111, 111);
    ellipse(710, 295, 111, 111);
  } else if (y < 1000)
    ellipse(250, 495, 111, 111) & ellipse(750, 495, 111, 111);

  pop();
}
function body(x, y, spd, scl) {
  push();
  translate(x, y);

  fill(bgR, bgG, bgB);
  scale(scl);
  if (y < 280) {
    circle(500, 500, 550);
  } else if (y < 1000) circle(500, 500, 500);
  pop();
}
function eyes(x, y, spd, scl) {
  push();
  translate(x, y);

  fill(90, 190, 300);
  scale(scl);
  ellipse(439, 423, 59, 147);
  ellipse(559, 423, 59, 147);
  fill(255);
  ellipse(439, 400, 51, 100);
  ellipse(559, 400, 51, 100);
  pop();
}
function cheeks(x, y, spd, scl) {
  push();
  translate(x, y);

  noStroke();
  fill(255, 0, 0, 100);
  scale(scl);
  ellipse(369, 488, 99, 49);
  ellipse(631, 488, 99, 49);
  pop();
}
function mouth(x, y, spd, scl) {
  push();
  translate(x, y);

  noFill();
  scale(scl);
  if (y < 280) {
    stroke(0);
    fill(300, 110, 90);
    circle(500, 550, 100, 100);
  } else if (y < 1000) arc(500, 500, 90, 90, PI * 0.2, PI * 0.8);
  pop();
}
