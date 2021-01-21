
let endereco = {
    rua: "Rua 15",
    cidade: "Rio Claro",
    cep: 13502270,
 /*   exibeEndereco(endereco) {
        for (let chave in this){
            console.log(chave + ": " + endereco[chave]);
        }
    }
*/
}



function exibeEndereco(endereco) {
    for (let chave in endereco){
        console.log(chave + ": " + endereco[chave]);
    }
}



//endereco.exibeEndereco(endereco);
exibeEndereco(endereco);