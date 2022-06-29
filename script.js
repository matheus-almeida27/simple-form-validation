const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passCheck = document.getElementById('passcheck');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    // pegar os valores dos inputs
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const passCheckVal = passCheck.value.trim()

    //check username
    if (usernameVal === '') {
        //error
        setErrorFor(username, 'Username cant be blank')
    } else {
        //valido
        setSuccessFor(username,'Looks good!'); 
    }

    //check email
    if (emailVal === '') {
        //error
        setErrorFor(email, 'Email cant be blank')
    } else {
        //valido
        setSuccessFor(email,'Looks good!'); 
    }

    //check password
    if (passwordVal === '') {
        //error
        setErrorFor(password, 'Password cant be blank')
    }else if(passwordVal.length < 5) {
        //error
        setErrorFor(password, 'must be more than 5 characters')

    } else {
        //valido
        setSuccessFor(password,'Looks good!'); 
    }

    //check Confirm Password
    if (passCheckVal === '') {
        //error
        setErrorFor(passCheck, 'Check your password')
    } else if (passCheckVal !== passwordVal) {
        //error
        setErrorFor(passCheck, 'Passwords does not match...')

    } else {
        setSuccessFor(passCheck,'Passwords match!'); 
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    //error msg inside small element
    small.innerText = message;

    formControl.className = 'form-control error'
    
}

function setSuccessFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    //error msg inside small element
    small.innerText = message;

    formControl.className = 'form-control success'
    
}