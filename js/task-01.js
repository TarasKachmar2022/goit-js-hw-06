const itemQuantEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemQuantEl.length);

for(let i = 0; i < itemQuantEl.length; i += 1){
    console.log('Category:', itemQuantEl[i].querySelector('h2').textContent);
    console.log('Elements:', itemQuantEl[i].querySelectorAll('li').length);
}
