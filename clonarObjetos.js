//Criando Objeto
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


//Clonando Objeto
const celularClone = Object.assign({
    cor: "Preto"
}, celular);

console.log(celularClone);

//Maneira alternativa de clonar o objeto
const celularClone2 = {...celularClone, ano:"2018"}
console.log(celularClone2.ano);