// const listElement = document.querySelector('button .excluir');

function alerta() {
    alert("Tem certeza que quer excluir a tabela?");
  }

function confirma(){
  confirm("Certeza que quer excluir?");
}

function exibe(){
  var valor = prompt("Quantas linhas deseja adicionar?");

  if(valor != null){
    alert("Linha " + valor + " adcionada com sucesso!");
  
  }
}

function submitForm(){
  alert('CPF e SENHA corretos!');
}