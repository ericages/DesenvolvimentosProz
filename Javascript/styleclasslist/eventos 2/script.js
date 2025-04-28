const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");
console.log(linkPerfilDados)

linkPerfil.addEventListener("mouseover", ()=> {
  navPerfil.style.display = "block"
});

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  console.log(e.code)
})

// exibir o menu secundário ao clicar na tecla "Digit1"

window.addEventListener('keyup', (e) => {
  if(e.code === "Digit1") {
    navPerfil.style.display = "block"
  }
})

// atividade
window.addEventListener('keyup', (e) => {
  if(e.code === "Escape") {
    navPerfil.style.display = "none"
  }
})

window.addEventListener('keyup', (e) => {
  if(e.code === "KeyD") {
    console.log("Tecla D pressionada")
    linkPerfilDados.click()
  }else {
    if(e.code === "Digit1"){
      console.log("Tecla 1 pressionada outra vez")
      navPerfil.style.display = "block"
    }
  }
});