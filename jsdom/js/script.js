let roundButton = document.getElementById('roundButton');
roundButton.addEventListener('click', roundButtonClicked);
function roundButtonClicked(){
  
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
