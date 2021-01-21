//Crie dois objetos se eles são iguais em propriedades e em valores


function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

function criarEndereco(rua, cidade, cep){
    return {
        rua,
        cidade,
        cep
    }
}


const endereco1 = new Endereco('5', "Campinas", 13502270);
const endereco2 = criarEndereco('5', "Campinas", 13502270);

console.log(endereco1);

function saoIguais(endereco1, endereco2){
    for (let chave in endereco1){
        for (let chave2 in endereco2){
            if(chave === chave2){
                console.log(chave + " esta contido em ambos os objetos")
            }
        }
    }
}

function valoresIguais(endereco1, endereco2){
    for (let chave in endereco1){
        for (let chave2 in endereco2){
            if(endereco1[chave] == endereco2[chave2]){
                console.log(chave.toUpperCase() + "s são iguais em ambos quanto a valor (" + endereco1[chave] + ")")
            }
        }
    }
}


saoIguais(endereco1,endereco2);
valoresIguais(endereco1, endereco2);