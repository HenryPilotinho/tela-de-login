'use strict'
const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)

document.getElementById('open-login').addEventListener('click', moveOverlay)






const formulario = document.getElementById("form-register");
const Inome = document.getElementById("nome")
const Iemail = document.getElementById("emailR")
const Isenha = document.getElementById("senhaR")
const IsenhaL = document.getElementById("senhaL")
const IemailL = document.getElementById("emailL")

function cadastrar(){
    fetch("https://localhost/cadastrar",
        {
            headers:{
                'Accept': 'application.json',
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha: Isenha.value
            })
        })
        .then(function(res){console.log(res)})
        .catch(function(res){console.log(res)})
};
function logar(){
    fetch("https://localhost/cadastrar",
        {
            headers:{
                'Accept': 'application.json',
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify({
                email: Iemail.value,
                senha: Isenha.value
            })
        })
        .then(function(res){console.log(res)})
        .catch(function(res){console.log(res)})
};

function limpar (){
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    IsenhaL.value = "";
    IemailL.value = "";
};

document.getElementById("register-btn").onmousedown = () => {
    cadastrar();
    limpar();
}
document.getElementById("login-btn").onmousedown = () => {
    cadastrar();
    limpar();
}

// formulario.addEventListener('submit', function(event){
//     event.preventDefault();
    
//     cadastrar();
//     limpar();
// });