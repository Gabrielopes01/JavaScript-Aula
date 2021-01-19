//Seus nomes são normalmente compostos de um Verbo + Substantivo
let corSite = "Azul"

function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade,
    troca = 1;   
}


console.log(corSite);
resetaCor("Amarelo", "Claro");
console.log(corSite);


function exibeCorNova(cor){
    corSite = cor
    console.log(corSite)
}

console.log(corSite);
exibeCorNova("Preto");


//Função Sem Retorno
function dizerNome(){
    console.log('Roger')
}

dizerNome(); 

//Função com Retorno
function multiplicaPorDois(num){
    return num * 2
}

num = multiplicaPorDois(6);
console.log(num)