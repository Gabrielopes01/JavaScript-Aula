//For...In - Pega as chaves de um array ou objeto 
let pessoa = {
    nome: "Gabriel Lopes",
    idade: 19
}


//Chave - Valor
for (let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}


const cores = ["Azul", "Vermelho", "Verde"];

for (let indice in cores){
    console.log(indice + " = " + cores[indice]);
}