const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Варіант 1. Шаблонні рядки.

const gallaryRef = document.querySelector('.gallery');
const markup = images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width="360"></li>`).join('');
gallaryRef.insertAdjacentHTML('beforeend', markup);
console.log(markup)


// Варіант 2. createElement.

// const gallaryRef = document.querySelector('.gallery');

// let markup = [];

// for(let i = 0; i < images.length; i += 1){
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = images[i].url;
//   img.alt = images[i].alt;
//   img.width = 300;
//   li.append(img);
//   markup.push(li);
// }
// gallaryRef.append(...markup);
// console.log(gallaryRef)