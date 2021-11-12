let roundButton = document.getElementById('roundButton');
roundButton.addEventListener('click', roundButtonClicked);
function roundButtonClicked(){

}
let radius = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {




  //****** PART TWO ******//
  //Let's draw a colorful flower!
  // let radius = 200;
  let angle = radians(frameCount);

  // let posX = radius * cos(angle) + noise(angle)*50;
  // let posY = radius * sin(angle) + noise(angle)*50;

  let posX = radius * cos(angle) * noise(angle);
  let posY = radius * sin(angle) * noise(angle);

  let r = map(cos(angle), -5, 1, 60, 255);
  let g = map(sin(angle), -1, 1, 0, 100);
  let b = map(noise(angle), 0, 1, 0, 10);
  let x = frameCount % width;
    let amp =20;
  let y1 = sin(frameCount * 0.07)* amp;
  let y2 = random(20);

  push();
  translate(width / 2, height / 2);
  stroke(r, g, b, 200);
  fill(r, g, b);
  noStroke();
  ellipse(posX, posY, y1)*amp;
  pop();

  radius = radius + 0.01;
}















let i = 0;;
i = i+2;
alert(i)
console.log('The page has loaded');
console.log('i is'+i);

function say(what) {
  //alert(what);



let elem = document.getElementById('lyrics');

let newElem = document.createElement('p');

newElem.innerHTML = what;

elem.appendChild(newElem);

elem = document.getElementById('heading');
let rectElem = document.getElementById('rectElem');
if (what == 'Harder'){
  elem.style.backgroundColor = 'rgb(124, 12, 12)';
  rectElem.style.borderRadius= '0px';
} else{
  elem.style.backgroundColor = 'blue';
  rectElem.style.borderRadius= '50px';
}

console.log(elem);
}
