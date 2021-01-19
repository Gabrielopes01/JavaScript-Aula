
const resultado = fizzBuzz(19);
console.log(resultado);

function fizzBuzz(entrada) {
    
    if(typeof(entrada) != "number"){
        return "Não é um número";
    } else {
        if(entrada % 3 === 0){
            return entrada % 5 === 0 ? "FizzBuzz" : "Fizz";
        } else if (entrada % 5 === 0){
            return "Buzz";
        } else {
            return entrada
        }
    }
}