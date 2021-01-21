const marcas = [
    {id: 1, nome: 'Sony'},
    {id: 2, nome: 'Microsoft'},
    {id: 3, nome: 'Pantene'},
    {id: 4, nome: 'Bauduco'}
];


//Forma 1
console.log(marcas.find(function(marca){
    return marca.id === 1; 
}));

//Forma 2 - Usando Arrow Function
console.log(marcas.find(marca => marca.id === 2));  // O Find tem precisa de um termo true ou false, se voltar True, ele pega o elemento em ordem que estava analisando e exibe


//Find só precisa encontrar um valor true, e como ele é um for do array, o elemento que der true, ele tetorna
let n = 0
console.log(marcas.find(marca => {
    n++
    return n === 1
}))
