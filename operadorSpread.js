const primeiroA = [1,2,3,4,5];
const segundoA = [6,7,8,9,10];
const terceiroA = [11,12,13];

//const combinadoC = primeiroA.concat(segundoA,5.5,terceiroA,14,15);
//console.log(combinadoC);
const combinado = [...primeiroA, 5.5,...segundoA,...terceiroA, 14, 15];   //Forma alternativa de combinar arrays usando spread, ele percorre o array e vai adicionando, voce pode adicionar valores nele
console.log(combinado);
//const cortado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);


//spread ex
// 1,2,3,%,4,5,6

const exercicio = [...primeiroA.slice(0,3),"%",...primeiroA.slice(3,5),...segundoA.slice(0,1)];
console.log(exercicio);