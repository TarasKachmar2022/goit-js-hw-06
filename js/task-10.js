function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsRef: document.querySelector('#controls input'),
  createBtnRef: document.querySelector('[data-create]'),
  destroyBtnRef: document.querySelector('[data-destroy]'),
  boxesRef: document.querySelector('#boxes'),
}

refs.controlsRef.addEventListener('input', onInputChange);
refs.createBtnRef.addEventListener('click', onCreateBtnClick);
refs.destroyBtnRef.addEventListener('click', destroyBoxes);
// console.log(event.value)

let arr = [];
let divSize = 20;

function createBoxes(amount){
  for(let i = amount - 1; i < amount; i += 1){
    let newElement = document.createElement('div');
    divSize += 10;
    newElement.textContent = newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.height = [divSize]+'px';
    newElement.style.width = [divSize]+'px';
    arr.push(newElement);
    
  }
}

function onInputChange(event){
  createBoxes(event.currentTarget.value);
}

function onCreateBtnClick(){
  refs.boxesRef.append(...arr);
  console.log(refs.boxesRef)
}

function destroyBoxes(){
  refs.boxesRef.innerHTML = '';
}