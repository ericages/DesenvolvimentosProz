let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

titulo.innerText = 'Proz Cursos'
link.innerText = 'Site da Proz'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

listaNaoOrdenada.innerHTML = `
  <li>Programação</li>
  <li>Linux</li>
  <li>AWS</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https://facebook.com/">Facebook</a></li>
  <li><a href="https://www.aws.com">AWS</a></li>
  <li><a href="https://www.linkedin.com">LinkedIn</a></li>
`