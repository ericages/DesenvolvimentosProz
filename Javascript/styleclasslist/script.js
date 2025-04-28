const h2 = document.querySelector('h2');
console.log(h2.innerText)
console.log(h2.innerHTML)
h2.style.color = 'purple';
h2.style.fontSize = '50px';

const button = document.querySelector('button');
button.style.color = 'purple';
button.style.fontSize = '15px';
button.style.background = 'yellow';

/* erro nome e senha */

const inputName = document.querySelector('#login-usuario')
// console.log(inputName);
// inputName.classList.add('error')

const mensagemErro = document.querySelectorAll('p');
// console.log(mensagemErro);
// mensagemErro[0].classList.add('visible')

const inputSenha = document.querySelector('#login-senha')
// inputSenha.classList.add('error')
// mensagemErro[1].classList.add('visible')

/* acerto */

inputName.classList.add('correct')
mensagemErro[0].classList.remove('visible')
inputName.classList.remove('error')
inputSenha.classList.remove('error')
inputSenha.classList.add('correct')
mensagemErro[1].classList.remove('visible')