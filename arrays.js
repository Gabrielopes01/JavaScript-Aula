//Array é um conjunto de dados que podem ser acessados usando seu índice/posição

let nomes = ["Gabriel", "Rogerio", "Richard"];

console.log(nomes[0]);
console.log("Tamanho: " + nomes.length);

let dionisio = ["Camara", 19, "Santa Gertrudes"];
console.log(dionisio[0]);


//Unshift() = adiciona um elemento no inicio do array
console.log("-----------");
console.log(nomes);
nomes.unshift("Carlos");
console.log(nomes);

//Splice(Indice, Numero de elementos para deletar, Valor) = adiciona um elemento no meio do array
console.log("-----------");
console.log(nomes);
nomes.splice(1, 0, "Ana");  //Inseriu na posicao e apagou 2 que estavam na frente
console.log(nomes);

//Push() = adiciona um elemento no final da lista
console.log("-----------");
console.log(nomes);
nomes.push("Alice");
console.log(nomes);


//Pop() = Remove um Elemento no Final e retorna ele
const ultimo = nomes.pop();
console.log("Removendo " + ultimo + " = " + nomes);

//Shift = Remove um Elemento no inicio do array e retorna ele
const primeiro = nomes.shift();
console.log("Removendo " + primeiro + " = " + nomes);

//Splice(Posicao, Numeros a serem removidos) = Remove elementos no meio do array e retorna eles
const removidos = nomes.splice(1, 2);
console.log("Removendo " + removidos + " = " + nomes);


//Encontrando Valores Primitivos em Array
const numeros = [1,2,3,4,1];

//indexOf() = Busca um elemento específico dentro do array e retorna a posição do 1º resultado do mesmo caso ele esteja la, se
//ele não encontrar, é retornado o -1. Tem difereça de tipos
console.log(numeros.indexOf(3));

//lastIndexOf() = Busca um elemento específico dentro do array retornando a última posição em que ele aparece,
//caso exista
console.log(numeros.lastIndexOf(1));

//Verificando se há um elemento dentro de um array
numeros.indexOf(4) === -1 ? console.log("Seu numero não está dentro do array") : console.log("Seu numero está dentro do array");

//Maneira alternativa 
numeros.includes(4)? console.log("Seu numero está dentro do array") : console.log("Seu numero não está dentro do array");


//Encontrando Valores Referenciais em Array
const marcas = [
    {id: 1, nome: 'Sony'},
    {id: 2, nome: 'Microsoft'},
    {id: 3, nome: 'Pantene'},
    {id: 4, nome: 'Bauduco'}
];

//includes() não funciona em objetos

//find() - Reto4rna o primeiro elemento do array que satisfaça a condiçao de busca, se não houver, ele retorna
//um undefined

console.log(marcas.find(function(marca){
    return marca.id === 1; 
}));

//Forma 2 - Usando Arrow Function
console.log(marcas.find(marca => marca.id === 2));  // O Find tem precisa de um termo true ou false, se voltar True, ele pega o elemento em ordem que estava analisando e exibe

const cores = [
    {id: 1, cor: "Azul"}, 
    {id: 2, cor: "Vermelho"}, 
    {id: 3, cor: "Amarelo"}
];

//Retorna o primeiro valor em que aparece a letra "e"
console.log(cores.find(function(coresa){
    return coresa.cor.includes("e") && coresa.cor.startsWith("A") ? coresa.cor : "";
}));



//Removendo Elementos do Array
let letras = ["a", "b", "c", "d", "e", "f", "g"];


console.log(letras);
//Primeiro Elemento
const primeira = letras.shift();
console.log(letras);
//Ultimo Elemento
const ultima = letras.pop();
console.log(letras);
//Elementos do meio
const meio = letras.splice(2,2)
console.log(letras);

console.log("Removidos = " + primeira + "," + meio + "," + ultima);


//Esvaziando o Array

//Forma 1 - Apenas esvazia o array sem apgar suas referencia
//letras = [];

//Forma 2 - Apaga o array e referencias
//letras.length = 0;

//Forma 3 - Apaga o array e referencias
letras.splice(0,letras.length)

console.log(letras);

console.log("---------------------------");

//Combinando e Cortando Arrays

const primeiroA = [1,2,3,4,5];
const segundoA = [6,7,8,9,10];
const terceiroA = [11,12,13];

//Concat() = Combina um array com outro
const combinado = primeiroA.concat(segundoA,terceiroA,14); //O concat pode receber uma lista de itens prar unir
//Voce pode adicionar valores extras no concat
console.log(combinado) 

//Slice() = Divide um array
const dividido = combinado.slice(0,3);  //O Slice nunca pega o ultimo valor inserido, que neste caso é o 4 (3 pos+1)
console.log(dividido);


//Join() = combina Elementos de um Array
const nome = "Gabriel";
const nomeArray = nome.split("");  //A string foi separado por caracteres e transformada em um array
console.log(nomeArray);
const nomeJoin = nomeArray.join(""); //Juntando novamente o array em uma string, usando o elemento inserido como conector
console.log(nomeJoin);

