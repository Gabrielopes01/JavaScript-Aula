//If...Else
data = new Date();
console.log(data);
console.log("Ano = " + data.getFullYear());
console.log("Mês = " + (data.getMonth() + 1));
console.log("Dia = " + data.getDate());
console.log("Horas = " + data.getHours());
console.log("Minutos = " + data.getMinutes());

let horas = data.getHours();
let minutos = data.getMinutes();

if(horas > 6 && horas <= 12) {
    console.log("Bom Dia!");
}else if (horas > 12 && horas <= 18){
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");
}

