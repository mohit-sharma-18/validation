const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');
const success = document.getElementById('success');
const danger = document.getElementById('danger');
const form = document.getElementById('form');
let nameValid = false;
let emailValid = false;
let phoneValid = false;



// Validation for name

name.addEventListener('blur', () => {
    console.log('Event blur success');

    let reg = /^([a-zA-Z])([\s0-9a-zA-Z]){3,12}$/;
    let str = name.value;

    if (reg.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        nameValid = true;


    }
    else {
        console.log('invalid name');
        name.classList.add('is-invalid');
        nameValid = false;


    }

});

// Validation for email

email.addEventListener('blur', () => {
    console.log('Event blur success');

    let reg = /([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,6}$/;
    let str = email.value;

    if (reg.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        emailValid = true;


    }
    else {
        console.log('invalid email')
        email.classList.add('is-invalid');
        emailValid = false;

    }

});


// Validation for phone

phone.addEventListener('blur', () => {
    console.log('Event blur success');

    // let reg = /[0-9]{10}$/;
    let str = phone.value;

    if (phone.value.length == 10) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        phoneValid = true;

    }
    else {
        console.log('invalid phone')
        phone.classList.add('is-invalid');
        phoneValid = false;
    }

});


submit.addEventListener('click', (p) => {
    p.preventDefault();

    if (nameValid && emailValid && phoneValid) {
        console.log('phone name email is valid')
        success.classList.remove('d-none');
        form.reset();
        setTimeout(function () {
            success.classList.add('d-none');
        }, 2000);
    }
    else {
        console.log('phone name email is NOT valid')
        danger.classList.remove('d-none');
        setTimeout(function () {
            danger.classList.add('d-none');
        }, 2000);
    }
    
    

   

})