//Funções de Fabrica - Orientação a Objetos, estamos criando funções que agem como classes agiriam em outras linguagens
//Este método cria objetos
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(nome){
            console.log("Ligando para " + nome);
        }
    }

}


const celular1 = criarCelular("ASUS", 5.5, 5000);


celular1.ligar("Angela");
console.log(celular1.marcaCelular);


function criarJogo(nome, estudio, preco, extras){
    return {
        nome,
        estudio,
        preco,
        extras,
        estado(){
            console.log("Funcionando")
        }
    }
}


const jogo1 = criarJogo("God of War", "Santa Mônica", 259.99, "Guia do Jogo");

console.log(jogo1.nome);
jogo1.estado();



