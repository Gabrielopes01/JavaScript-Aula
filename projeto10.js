
numerosPrimos(15);


function exibirNumerosPrimos(limite){

    for (let i = 2; i <= limite; i++){

        if (verificaPrimo(i)) console.log(i)
    }



}

function verificaPrimo(num){
    for (let divisor = 2; divisor < num; divisor++){
        if(num % divisor === 0){
            return false;
        }
    }
    
    return true;
}




function numerosPrimos(limite){

    for (let num = 2; num < limite; num++){
        let primo = true;

        for (let divisor = 2; divisor < num; divisor++){
            if (num % divisor === 0){
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log("Primo = " + num)
        }

    }


}