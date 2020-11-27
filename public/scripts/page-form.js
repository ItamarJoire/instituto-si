const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// SUBMIT
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        // show error
        // add error class
        setErrorFor(username, 'Cpf não pode ficar em branco');
    }else{
        // add success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email não pode ficar em branco');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Este email não é válido');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Senha não pode ficar em branco');
    }else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Confirmação de senha não pode ficar em branco');
    }else if(passwordValue != password2Value){
        setErrorFor(password2, 'Senha não corresponde');
    }else{
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';  
    small.innerText = message;

}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// KEYUP
function caixaAlta(){
    var x = email;
    x.value = x.value.toUpperCase();
}

// KEYPRESS
function soNumero(){
    var x = username;
    
    x.addEventListener('keypress', function(evento){
        if((evento.keyCode < 47) || (evento.keyCode > 57)){
            alert("Só digite números, por favor!");
        }
    })
}