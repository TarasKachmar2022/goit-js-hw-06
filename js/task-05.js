const refs = {
    inputEl: document.querySelector('#name-input'),
    titleSpanEl: document.querySelector('#name-output'),
}

    refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event){
    if(event.currentTarget.value !== ''){
    refs.titleSpanEl.textContent = event.currentTarget.value;
    } else {
    refs.titleSpanEl.textContent = 'Anonymous';
    }
}