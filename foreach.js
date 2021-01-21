//Iterar = Percorrer o array
const numeros = [5,6,7,8,9];

/*
//Usando o FOR
for (numero of numeros){
    console.log(numero);
}
*/

//Usando o FOREACH()
numeros.forEach((numero,indice) => {    //Primeiro vem o val0or depois o indice, ja no PHP é primeiro o indice => valor
    console.log(indice + " = " + numero);
});



console.log("-------------------");
const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];

letras.forEach((letra,indice) => {
    console.log(indice + " = " + letra);
});