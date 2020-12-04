// event CONFIRM
const tabela = document.querySelector('.secao-alunos table');

function opcao(){
  var text;
  var msg = confirm("Tem certeza que quer excluir toda tabela?");

  if (msg == true) {
    return excluir(tabela);
  }else {
    text = "Cancelado com sucesso!";
    alert(text);
  }
}

function excluir(tabela){
  tabela.remove();
}

function remover(){
  var linhaOne = document.getElementById('line-1');
  alert('Linha 1 será removida');
  linhaOne.remove();

}


// event PROMPT e ALERT
function exibe(){

  var text;
  var name = prompt("Qual o nome que procura na tabela?");

  switch(name){
    case "Pedro":
      text = "Nome existe na tabela!";
      break;
    case "Flávio":
      text = "Nome existe na tabela!";
      break;
    case "Léo":
      text = "Nome existe na tabela!";
      break;
    case "Maria":
      text = "Nome existe na tabela!";
      break;
    case "Gabi":
      text = "Nome existe na tabela!";
      break;  
    default:
      text = "Desculpe, mas este nome não está na tabela!";
  }
  
  alert(text);
}

// KEYDOWN - Informativo sobre a página clicando na letra i

document.addEventListener('keydown', (evento) => {
  
  if(evento.keyCode === 73){  
  alert('Página com nomes dos alunos matriculados');
  }
});


