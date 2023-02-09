const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

let arr = [];
for(let i = 0; i < ingredients.length; i += 1){
  const liEl = document.createElement('li');
  liEl.textContent = ingredients[i];
  liEl.classList.add('js-item');
  arr.push(liEl);
}
ingredientsEl.append(...arr);