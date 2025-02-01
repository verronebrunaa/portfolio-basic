let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function currentYear() {
    let ano = new Date().getFullYear();
    return ano;
}

function validName() {
    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Nome válido!';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        txtEmail.innerHTML = 'E-mail inválido!';
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail válido!';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    if (document.querySelector('#assunto').value.length < 10) {
        txtAssunto.innerHTML = 'Assunto muito curto!';
        txtAssunto.style.color = 'red';
    } else {
        txtAssunto.innerHTML = 'Assunto válido!';
        txtAssunto.style.color = 'green';
        assuntoOk = true;
    }
}

function send(event) {
    event.preventDefault();
    if (nomeOk && emailOk && assuntoOk) {
        alert('O formulário foi enviado com sucesso! 😄');
    } else {
        alert('Preencha o formulário corretamente antes de enviar! 🤔');
    }
}

document.getElementById("contact-form").addEventListener("submit", send);

