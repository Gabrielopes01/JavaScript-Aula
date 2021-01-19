// String tipo primitivo
const palavra = "Carro";
//String tipo objeto
const mensagem = new String("Bom Dia");


//Length = Pega o numero de caracteres da String, não é uma função
console.log(mensagem.length);
console.log(palavra.length);


//Pegando um carectere especifico da String
console.log(palavra[2]);


//Indexof() = Acha o index/posicao de uma palvra ou da primeira apricao de uma letra
console.log(mensagem.indexOf("Dia"));

//Replace = Substitui uma string por outra
console.log(mensagem.replace("Dia", "Final de Semana"));

//Split() = Divide a string em partes (array) seguindo uma referencia
let array = mensagem.split(" ");  //Dividiu em 2 partes
console.log(array[1]);

//Trim() = Remove os espaçamentos extras no inicio e no fim de uma String
const mensagem2 = new String("    Bom     Dia    ");
console.log(mensagem2);
console.log(mensagem2.trim());