const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputFocusChange);

function onInputFocusChange(event){
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
        if(inputRef.classList.contains('invalid')){
            inputRef.classList.remove('invalid');
        }
        inputRef.classList.add('valid');
        if(!event.currentTarget.value.length){
            inputRef.classList.remove('valid');
        }
        return;
    } 
        if(inputRef.classList.contains('valid')){
            inputRef.classList.remove('valid');
        }
        inputRef.classList.add('invalid');
        if(!event.currentTarget.value.length){
            inputRef.classList.remove('invalid');
        }
    }


// Old version

// if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
//     if(inputRef.classList.contains('invalid')){
//         inputRef.classList.remove('invalid');
//     }
//     inputRef.classList.add('valid');
//     if(!event.currentTarget.value.length){
//         inputRef.classList.remove('valid');
//     }
//     return;
// } else if(!event.currentTarget.value.length === Number(event.currentTarget.dataset.length));
//     if(inputRef.classList.contains('valid')){
//         inputRef.classList.remove('valid');
//     }
//     inputRef.classList.add('invalid');
//     if(!event.currentTarget.value.length){
//         inputRef.classList.remove('invalid');
//     }
// }