var ballx = 300;
var bally = 300;
var ballSize = 530;
var score = 0;
var gameState = "L0";
let trail = [];
let a = 0;
let myCloud;
let myCloud2;
let myCloud3;
let myCloud4;
let myCloud5;
let myCloud6;

let myCloud7;
let myCloud8;
let myCloud9;
let myCloud10;
let myCloud11;
let myCloud12;

galaxy = {
  locationX: 0,
  locationY: 0,
};

let endTime = 0;
let interval = 100;

var mode;

var timerValue = 42;
var enterButton;
let song;

function setup() {
  let canvas =createCanvas(600, 600);
  canvas.parent('sketchContainer');
  textAlign(CENTER);
  textSize(20);
  myCloud = new Cloud(10, 120);
  myCloud2 = new Cloud(240, 150);
  myCloud3 = new Cloud(240, 250);
  myCloud4 = new Cloud(440, 350);
  myCloud5 = new Cloud(540, 450);
  myCloud6 = new Cloud(740, 550);

  myCloud7 = new Cloud1(10, 120);
  myCloud8 = new Cloud1(240, 150);
  myCloud9 = new Cloud1(240, 250);
  myCloud10 = new Cloud1(440, 350);
  myCloud11 = new Cloud1(540, 450);
  myCloud12 = new Cloud1(740, 550);

  mode = "L0";
  setInterval(timeIt, 1000);
  // song = loadSound('ddd.mp3');
}

function draw() {
  background(220);
  if (gameState == "L0") {
    MENU();
  }
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "L5") {
    levelFive();
  }
  if (gameState == "L6") {
    levelSix();
  }
  if (gameState == "Finish") {
    WIN();
  }
  if (gameState == "Game Over") {
    LOSE();
  }

  text("Score: " + score, width / 2, 40);
  push();
  let angle = radians(frameCount);
  let r = map(cos(angle), 10, 1, 0, 255);
  let g = map(sin(angle), 10, 1, 0, 255);
  let b = map(noise(angle), 0, 1, 0, 255);

  trail.push([mouseX, mouseY]);
  for (let i = 0; i < trail.length; i++) {
    noStroke();
    fill(mouseX + random(r), mouseY + random(g), mouseY + b, mouseY + a);
    ellipse(trail[i][0], trail[i][1], 49, 20);
    ellipse(trail[i][0], trail[i][1], 20, 49);

    if (a > 255) {
      trail.shift();
      a = 0;
    }
    a += 8;
  }
  pop();

  //blinking stars

  if (millis() - endTime > interval) {
    galaxy = {
      locationX: random(width),
      locationY: random(height),
    };
    endTime = millis();
  }

  fill(255, 255, 255);
  // strokeWeight(0,0,0,0.5)
  ellipse(galaxy.locationX, galaxy.locationY, 11, 4);
  ellipse(galaxy.locationX, galaxy.locationY, 4, 11);

  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 6);
  }
  if (timerValue < 10) {
    text("0:0" + timerValue, width / 2, height / 6);
  }
  if (timerValue == 0) {
    if (score > 30) {
      gameState = "Winner";
    } else {
      gameState = "Game Over";
    }
  }
}

function MENU() {
  clear();
  if (mode == "L0") {
    background(77, 77, 327);
    fill(400, 200, 100);
    rect(0, 235, 600, 100);
    push();
    textSize(50);
    fill(255, 170, 500);
    text("Press Enter To Start", 300, 300);
    pop();
    push();
    scale(0.77);
    Kirby(100, 100);
    pop();
  }
  if (mode == "L1") levelOne();
}
function keyPressed() {
  if (keyCode === ENTER) {
    mode = "L1";
  }
}

function levelOne() {
  background(100, 200, 300);
  text("Level 1", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);
  console.log(disToBall);
  if (disToBall < ballSize / 100) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }
  push();
  scale(0.25);
  Kirby(ballx, bally);
  pop();
  line(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);
}
//level 1
function levelTwo() {
  background(100, 90, 300);
  text("Level 2", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);
  console.log(disToBall);
  if (disToBall < ballSize / 100) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }
  push();
  scale(0.25);
  Kirby(ballx, bally);
  pop();
}
//level 2
function levelThree() {
  background(random(100), random(100), random(200));
  text("Level 3", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);

  console.log(disToBall);
  if (disToBall < ballSize / 80) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 15) {
    gameState = "L4";
  }
  push();
  scale(0.25);
  Kirby(ballx, bally);
  pop();
}
//level 3
function levelFour() {
  background(random(100), random(100), random(200));
  text("Level 4", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);

  console.log(disToBall);
  if (disToBall < ballSize / 80) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 20) {
    gameState = "L5";
  }
  push();
  scale(0.25);
  Kirby1(ballx, bally);
  pop();
}
//level 4
function levelFive() {
  background(random(100), random(100), random(200));

  text("Level 5", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);

  console.log(disToBall);
  if (disToBall < ballSize / 80) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 25) {
    gameState = "L6";
  }
  push();
  scale(0.25);
  Kirby1(ballx, bally);
  pop();
  myCloud.moveX();
  myCloud.display();
  myCloud2.moveX();
  myCloud2.display();
  myCloud3.moveX();
  myCloud3.display();
  myCloud4.moveX();
  myCloud4.display();
  myCloud5.moveX();
  myCloud5.display();
  myCloud6.moveX();
  myCloud6.display();
}
//level 5
function levelSix() {
  background(random(100), random(100), random(200));

  text("Level 6", width / 2, height - 20);
  var disToBall = dist(ballx / 2 + 125, bally / 2 + 125, mouseX, mouseY);

  console.log(disToBall);
  if (disToBall < ballSize / 80) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 30) {
    gameState = "Finish";
  }
  push();
  scale(0.25);
  Kirby1(ballx, bally);
  pop();
  myCloud7.moveX();
  myCloud7.display();
  myCloud8.moveX();
  myCloud8.display();
  myCloud9.moveX();
  myCloud9.display();
  myCloud10.moveX();
  myCloud10.display();
  myCloud11.moveX();
  myCloud11.display();
  myCloud12.moveX();
  myCloud12.display();
}
//Level 6
function WIN() {
  background(200, 800, 100);

  push();
  scale(0.66);
  Kirby(5, 5);
  pop();
  push();
  textSize(77);
  fill(100, 200, 177);
  text("WINNER", width / 2, 300);
  pop();
}
// Winning Screen

function LOSE() {
  background(255, 0, 0);

  push();
  scale(0.66);
  Kirby(5, 5);
  pop();
  push();
  textSize(77);
  fill(100, 200, 177);
  text("Game Over", width / 2, 300);
  pop();
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function Kirby(ballx, bally, size) {
  translate(ballx, bally);
  scale(size);
  push();
  //leg
  push();
  fill(595, 55, 91);
  ellipse(ballx + 351, bally + 701, 263, 144);
  ellipse(ballx + 651, bally + 701, 263, 144);
  pop();
  //arm
  push();
  fill(453, 95, 91);
  ellipse(ballx + 250, bally + 495, 121, 121);
  ellipse(ballx + 750, bally + 495, 121, 121);
  pop();
  //body
  push();
  fill(453, 95, 91);
  circle(ballx + 500, bally + 480, ballSize);
  pop();
  //eyes
  push();
  fill(90, 190, 300);
  ellipse(ballx + 439, bally + 423, 59, 147);
  ellipse(ballx + 559, bally + 423, 59, 147);
  fill(255);
  ellipse(ballx + 439, bally + 400, 51, 100);
  ellipse(ballx + 559, bally + 400, 51, 100);
  pop();
  // cheeks
  push();
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(ballx + 369, bally + 488, 99, 49);
  ellipse(ballx + 631, bally + 488, 99, 49);
  pop();
  //mouth
  push();
  noFill();
  stroke(0);
  fill(300, 110, 90);
  circle(ballx + 500, bally + 550, 100);
  pop();

  pop();
}

function Kirby1(ballx, bally, size) {
  translate(ballx, bally);

  push();
  scale(size);
  //leg
  push();
  fill(random(595), random(95), 91);
  ellipse(ballx + 351, bally + 701, 263, 144);
  ellipse(ballx + 651, bally + 701, 263, 144);
  pop();
  //arm
  push();
  fill(random(453), random(95), 91);
  ellipse(ballx + 250, bally + 495, 121, 121);
  ellipse(ballx + 750, bally + 495, 121, 121);
  pop();
  //body
  push();
  fill(random(453), random(95), 91);
  circle(ballx + 500, bally + 480, ballSize);
  pop();
  //eyes
  push();
  fill(90, 190, random(300));
  ellipse(ballx + 439, bally + 423, 59, 147);
  ellipse(ballx + 559, bally + 423, 59, 147);
  fill(255);
  ellipse(ballx + 439, bally + 400, 51, 100);
  ellipse(ballx + 559, bally + 400, 51, 100);
  pop();
  // cheeks
  push();
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(ballx + 369, bally + 488, 99, 49);
  ellipse(ballx + 631, bally + 488, 99, 49);
  pop();
  //mouth
  push();
  noFill();
  stroke(0);
  fill(300, random(110), 90);
  circle(ballx + 500, bally + 550, 100);
  pop();

  pop();
}
class Cloud {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.colour = color(400, 400, 400);
  }

  moveX() {
    this.x += 1;
    if (this.x > width) {
      this.x = 0;
    }
  }
  display() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, 100, 50);
    ellipse(this.x + 50, this.y + 20, 100, 50);
    ellipse(this.x - 40, this.y + 15, 100, 50);
  }
}

class Cloud1 {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.colour = color(400, 400, 400);
  }

  moveX() {
    this.x += 1;
    if (this.x > width) {
      this.x = 0;
    }
  }
  display() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, 200, 100);
    ellipse(this.x + 50, this.y + 20, 300, 120);
    ellipse(this.x - 40, this.y + 15, 170, 100);
  }
}
