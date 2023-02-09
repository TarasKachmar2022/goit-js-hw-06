// Варіант 1:

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColorRef: document.querySelector('.color'),
  changeColorBtnRef: document.querySelector('.change-color'),
};

refs.changeColorBtnRef.addEventListener('click', onChangeColor);

function onChangeColor(){
refs.spanColorRef.textContent = document.body.style.backgroundColor = getRandomHexColor();
}


// // Варіант 2:
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   spanColorRef: document.querySelector('.color'),
//   changeColorBtnRef: document.querySelector('.change-color'),
// };

// refs.changeColorBtnRef.addEventListener('click', onChangeColor);

// function onChangeColor(){
//   let randomColor = getRandomHexColor();

//   document.body.style.backgroundColor = randomColor;
//   refs.spanColorRef.textContent = randomColor;
// }