
exibirTipo(5);

function exibirTipo(num) {
    if (typeof(num) != "number"){
        console.log("Valor inserido deve ser um número inteiro");
    } else {
        for (let i = 0; i <= num; i++){
            if (i % 2 === 0){
                console.log(i, "PAR");
            } else {
                console.log(i, "ÍMPAR");
            }
        }
    } 
        

}