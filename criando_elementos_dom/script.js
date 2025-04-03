let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Loja de Makes da Kinha";

let body = document.querySelector("body");
body.appendChild(titulo);
let produto = document.createElement("div");
produto.innerHTML = `
  <div>
    <h2>Base Adversa</h2>
    <p>Base vegana, cruelty-free, alta cobertura.</p>
    <p id="preco-base">R$ 22.90</p>
  </div>
`;
body.appendChild(produto)