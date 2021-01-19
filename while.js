//While Loop

let i = 0;

while (i <= 5){
    switch(i % 2){
        case 0:
            console.log(i + " = Par");
            break;
        case 1:
            console.log(i + " = Ímpar");
            break;  
    }

    i += 1;
}

console.log("-----------------");

//Do...While - Ele executa o código uma vez antes de verificar

i = 0;

do {
    switch(i % 2){
        case 0:
            console.log(i + " = Par");
            break;
        case 1:
            console.log(i + " = Ímpar");
            break;  
    }

    i += 1;
} while (i > 1 && i <= 5)