const form = document.getElementById('form');
const nameuser = document.getElementById('user');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');
const terms = document.getElementById('terms');

form.addEventListener('submit', (event)=>{
    event.preventDefault();//Remover comportamento padrão do navegador
    checkInputs();
})

function checkInputs(){
    const userValue = user.value.trim();
    const usernameValue = username.value.trim();//.trim remove espaços antes e apos
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordtwoValue = passwordtwo.value.trim();

    if(userValue === ''){
        validationError(user, 'Insira seu usuário!');
    }else{
        validationSucceor(user);
    }

    if(usernameValue === ''){
        validationError(username, 'Insira seu nome!');
    }else if(isNumeric(usernameValue)){
        validationError(username, 'Somente letras!');
    }else{
        validationSucceor(username);
    }

    if(emailValue === ''){
        validationError(email, 'Insira seu email!');
    }else if (!isEmail(emailValue)){
        validationError(email, 'Email inválido');
    }else{
        validationSucceor(email);
    }

    if(passwordValue === ''){
        validationError(password, 'Insira sua senha!');

    }else if(passwordValue.length < 8) { 
        validationError(password, 'Senha deve ter mais que 8 caracteres');
    }else{
        validationSucceor(password);
    }

    if(passwordtwoValue === ''){
        validationError(passwordtwo, 'Insira sua senha novamente!');

    }else if(passwordValue !== passwordtwoValue) { 
        validationError(passwordtwo, 'Senhas não tão iguais');
    }else{
        validationSucceor(passwordtwo);
    }

    if(terms.checked){

    }else{
        const spanTerms = document.getElementById('spanTerms');
        spanTerms.style.visibility = 'visible';
    }
}

function validationError(input, message){
    const inputBox = input.parentElement;
    const span = inputBox.querySelector('span');
    span.innerText = message;

    inputBox.className = 'input-box error';
}

function validationSucceor(input){
    const inputBox = input.parentElement;

    inputBox.className = 'input-box success';
}
function isNumeric(string){
    return /^[0-9]+$/.test(string);
}
function isEmail(email){
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}