//Neste exemplo de mensagens estamos usando escaoes
const mensagem = "Escapes:\nOla\nComo vai \'você\'?";
console.log(mensagem);

const nome = document.getElementById("nome").value;  //Pegando o valor de um HTML

//Template = `` - Ao colocar uma string dentro destes caracteres, ele vai manter os espaçamentos e quebras
//de linha do texto que você escrever sem ter que usar caracteres especiais de escape
const mensagemTplt = `Template Literal:
Ola 
Como vai 'você'? ${nome} `  //Variavel
console.log(mensagemTplt);
