// event CONFIRM
function opcao(){
  var text;
  var msg = confirm("Tem certeza que quer excluir?");

  if (msg == true) {
    text = "Excluído com sucesso!";
    return excluir(text);
  }else {
    text = "Cancelado com sucesso!";
    return excluir(text);
  }
}

function excluir(text){
  alert(text);
}

function remover(){
  confirm('Tem certeza que deseja excluir?');
  var lixo = document.getElementById('line-1');
  lixo.remove();
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


