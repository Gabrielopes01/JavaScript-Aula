let cor = null;   //NULL
console.log(typeof(cor));    //Junta diversas informações (Variaveis e Funçoes)  em um só lugar


let pessoa = {
    nome: "Rafael",
    idade: 30,
    sobrenome: "Cristhoper",
};


console.log(pessoa.nome);


//Chave-Valor
console.log("------------");    

/*
const celular = {
    marcaCelular: "LG",
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 10000,
    ligar: function(nome){
        console.log("Ligando para " + nome);
    }
}


celular.ligar("Gabriel");
console.log("------------");
*/




/*
const notebook = {
    marca: "Dell",
    largura: 40,
    cor: "Prata",
    processador: "Intel",
    ligar: function() {
        console.log("Ligando o Notebook");
    }
}


/* Exibindo Valores
for (let chave in notebook){
    console.log(chave + ": " + notebook[chave]);
}


notebook.ligar(); //Executa a função
console.log(notebook.ligar);    //Escreve a função, sempre imprime o que esta relacionado a chave
*/