const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conformpassword = document.getElementById('conformpassword');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.text(String(email).toLowerCase());
}




const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const conformpasswordValue= conformpassword.value.trim();

    if(nameValue === '') {
        setError(name, 'Username Both (fist & last) are required');
     } else{
        setSuccess(name);
     }
     if(nameValue === '') {
        setError(name, 'Username Both (fist & last) are required');
     } else{
        setSuccess(name);
     }

    if(emailValue === '') {
        setError(email, 'Email is required');
     } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
     }else {
        setSuccess(email);
     }

     //!..if (!/^\d{10}$/.test(phone)) {
        //alert('Please enter a valid 10-digit phone number.');
        //return;//
    if(phoneValue === '') {
        setError(phone, 'Phone number  is required');
    } else if (phoneValue.length <10 ) {
        setError(phone, 'phone number must be at least 10 digit.')
    }else{
        setSuccess(phone);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password,'Password must be at least 8 character')
    }else {
        setSuccess(password);
    }

    if(conformpasswordValue === '') {
        setError(conformpassword, 'Please confirm your password');
    }else if (conformpasswordValue !== passwordValue) {
        setError(conformpassword, "Password doesn't match");
    }else{
        setSuccess(conformpassword);
    }

};


