//Este método cria objetos
//camelCase - umDoisTres - A primeira letra pe minuscula
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

//Pascal Case - UmDoisTres - Primeira letra maiuscula
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular
    this.tamanhoTela = tamanhoTela
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log("Fazer ligação....")
    } 
}


const celular = new Celular("Asus", 5.5, 5000);
console.log(celular);


console.log("-----------------------");
//Criando uma nova variavel de objeto dinamicamente
celular.cor = "Preto";
console.log(celular.cor);
delete celular.cor; //Apaga uma variavel ou funcao do objeto

//Criando um novo metodo/funcao de objeto dinamicamente
celular.desligar = function(){
    console.log("Desligando");
}
celular.desligar();
console.log(celular);
console.log("-----------------------");


function Jogo(nome, empresa, preco, estado){
    this.nome = nome
    this.empresa = empresa
    this.preco = preco
    this.estado = function(){
        console.log("Jogo Funcionando");
    }
}

const jogo1 = new Jogo("Watch Dogs", "Ubisoft", "90.59");
console.log(jogo1);
jogo1.estado();