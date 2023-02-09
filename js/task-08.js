// Варіант 1: elements

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if(email === '' || password === ''){
        alert ('Всі поля повинні бути заповнені!');
    }

    const formData = {
        email,
        password,
    };
    console.log(formData);
    
    event.currentTarget.reset();
}


// // Варіант 2: formData

// const formRef = document.querySelector('.login-form');

// formRef.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event){
//     event.preventDefault();

//     const email = event.currentTarget.elements.email.value;
//     const password = event.currentTarget.elements.password.value;

//     if(email === ''){
//         alert ('Поле Email повинне бути заповнене!');
//     }
//     if(password === ''){
//         alert ('Поле Password повинне бути заповнене!');
//     }
//     const formData = new FormData(event.currentTarget);

//     formData.forEach((password, email) => {
//     console.log(email, password);
// })

//     event.currentTarget.reset();
// }