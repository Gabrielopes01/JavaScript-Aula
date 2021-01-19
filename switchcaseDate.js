//Switch...Case

let data = new Date(2021, 10, 13);
let diaSemana = data.getDay() + 1;

console.log(diaSemana);

switch (diaSemana){
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda";
        break;
    case 3:
        diaSemana = "Terça";
        break;
    case 4:
        diaSemana = "Quarta";
        break;
    case 5:
        diaSemana = "Quinta";
        break;
    case 6:
        diaSemana = "Sexta";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
}

console.log(diaSemana + " - " + data.getDate());