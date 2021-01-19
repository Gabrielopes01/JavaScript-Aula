const jogo = {
    nome: "God of War",
    estudio: "Santa Mônica",
    genero: "Ação",
    ano: 2018,
    123: "UmDOSTREs"
}

exibirPropriedades(jogo);

function exibirPropriedades(objeto) {
    for(let chave in objeto){
        if (typeof(objeto[chave]) === "string") {
            console.log(chave.toUpperCase() + ": " + objeto[chave]);
        }
    }  
}

