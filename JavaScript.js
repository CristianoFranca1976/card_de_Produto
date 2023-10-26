var imagens = ["assets/image2.png", "assets/image360.png"];
var indice = 0;

function trocarImagem() {
  indice = (indice + 1) % imagens.length;
  document.getElementById("sofa").src = imagens[indice];
}

function adicionaCesta() {
    document.getElementById("aviso").value;
    aviso.style.display = "flex"

}
function returnPage() {
    window.location.href = "index.html";
}
    
    