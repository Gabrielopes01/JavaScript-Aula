//Escrever uma funçao que usa dois numeros e retornar o maior entre eles

function returnMax(a,b) {
    return a > b ? a : b;
}

let num1 = 10;
let num2 = 5;

let max = returnMax(num1,num2);

console.log("O Maior Número é: " + max)