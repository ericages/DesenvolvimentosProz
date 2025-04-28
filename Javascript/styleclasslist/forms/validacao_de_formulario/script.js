// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
console.log(usernameInput);
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", () =>{
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () =>{
    usernameLabel.classList.remove('required-popup')
})

// Validar valor do input
usernameInput.addEventListener('change', (evento) => {
    let valor = evento.target.value;
    console.log(valor);
    if(valor.length < 3){
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = "O nome de usuário deve ter no mínimo 3 caracteres."
    } else {
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
        }
})

// validar email
let emailInput = document.getElementById("email");
console.log(emailInput);
let emailLabel = document.querySelector('label[for="email"]');
console.log(emailLabel);
let emailHelper = document.getElementById("email-helper");
console.log(emailHelper);

function mostrarEOcultarPopup(input, label){
    input.addEventListener('focus', () => {
        label.classList.add('required-popup')
    })
    input.addEventListener('blur', () =>{
        label.classList.remove('required-popup')
    })
}

// mostrarEOcultarPopup(usernameInput, usernameLabel)
mostrarEOcultarPopup(emailInput, emailLabel)
emailInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);
    if(valor.includes('@') && valor.includes('.com')){
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
    } else {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailHelper.innerText = "O email deve conter '@' e '.com'"
        emailInput.classList.remove('correct')
    }
})
let passwordInput = document.getElementById("senha");
let passwordLabel = document.querySelector('label[for="senha"]');
let passwordHelper = document.getElementById("senha-helper");

// Mostrar e Ocultar popup de campo obrigatório
mostrarEOcultarPopUp(passwordInput, passwordLabel)

// Validar valor do input da senha
passwordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length >= 8){
        // caso o valor seja válido
        passwordInput.classList.remove('error')
        passwordHelper.classList.remove('visible')
        passwordInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        passwordInput.classList.add('error')
        passwordHelper.classList.add('visible')
        passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres"
        passwordInput.classList.remove('correct')
    }
})
let confirmPasswordInput = document.getElementById("confirma-senha");
let confirmPasswordLabel = document.querySelector('label[for="confirma-senha"]');
let confirmPasswordHelper = document.getElementById("confirma-senha-helper");

// Mostrar e Ocultar popup de campo obrigatório
mostrarEOcultarPopUp(confirmPasswordInput, confirmPasswordLabel)

// Validar valor do input da senha
confirmPasswordInput.addEventListener('change', function(evento){
    let valor = evento.target.value;
    console.log(valor);

    if(valor === passwordInput.value){
        // caso o valor seja válido
        confirmPasswordInput.classList.remove('error')
        confirmPasswordHelper.classList.remove('visible')
        confirmPasswordInput.classList.add('correct')
    } else {
        // caso o valor seja inválido
        confirmPasswordInput.classList.add('error')
        confirmPasswordHelper.classList.add('visible')
        confirmPasswordHelper.innerText = "As senhas devem ser iguais. tente novamente..."
        confirmPasswordInput.classList.remove('correct')
    }
})
