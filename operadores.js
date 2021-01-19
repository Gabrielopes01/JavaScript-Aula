//Operadores Aritimétricos ou Matemáticos
// +, -, *, /, **
let num1 = 2;

console.log(num1 + 10)
console.log(num1 - 10)
console.log(num1 * 10)
console.log(num1 / 10)

//++, -- = Incremento e Decremento - O resultado só é exibido depois da operação caso o símbolo va depois do num (num++), 
//caso ele venha antes do numero (++num), sera exibido na mesma linha

//Operadores de Atribuição
let valor = 100;

//O "=" é um operador de atribuição que atribuí um valor a um nome
//+= Soma e atribui com o valor definido
console.log(valor + 150);

//Operador de Igualdade
console.log("Igualdade Restrita = " + (1 === 1));   //Verifica se o valor e o tipo são iguais
console.log("Igualdade Restrita = " + (1 === "1"));
//O "==" verifica apenas se os valores são iguais sem se importar com o tipo, chamado de igualdade solta


//Operador Ternário - Uma forma de fazer um IF em uma linha
let pontos = 105;
let tipo = pontos > 100 ? "premium" : "comum";
console.log("Cliente: " + tipo);

//Operadores de Comparação
//>, >=, <, <=, ==, !=, ===, !==

//Operadores Lógicos
// && = And - Retorna TRUE se todos os valores forem TRUE
console.log("&& = " + (true && true));
// || = Or - Retorna TRUE se houver 1 condição TRUE
console.log("|| = " + (true || false));
// ! = Not - Inverte o resultado, deixando TRUE FALSE e vice versa
console.log("! = " + (!true));

//Alguns valores são considerados Falsy e não se aplicam na comparação Booleana
// undifined, null, 0, false, '', Not a Number
//As vezes ele retorna o Truthy, retornando um valor não booleano que vale como True
console.log("Truthy = " + (false || 1));
console.log("Truthy = " + (false || "Teste"));
console.log("Truthy = " + (true || "Teste"));

let cor1 = "";  //Falsy
let cor2 = "Preto";  //Truthy

let cor3 = cor1 || cor2;
console.log(cor3);  //Como a cor1 não esta preenchida, ele pegou a cor2, caso ela estivesse preenchida, ele pegaria ela

//Operador BitWise 


