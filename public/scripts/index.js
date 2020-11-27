
// event HOVER
document.getElementById("button-logar").addEventListener("mouseover", mouseOver);
document.getElementById("button-logar").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("button-logar").style.backgroundColor = "#3533a5";
}

function mouseOut() {
  document.getElementById("button-logar").style.backgroundColor = "#504EED";
}


// LOAD
window.onload = function(){
 alert('Página carregada com sucesso!');
}