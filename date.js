/*
//Comando para gerar uma Data, por padrão ele pega a data atual
let data = new Date();
console.log(data);

//Podemos pegar uma data específica seguindo o padrão (Ano, Mes, Data, hora, minutos, segundos)
let data2 = new Date(2018, 10, 20); // 20/10/2018
console.log(data2);

//Em cada data nós podemos pegar os seguintes parametros
//Ano
console.log("Ano = " + data.getFullYear());
//Mes
console.log("Mês = " + (data.getMonth() + 1));
//Dia
console.log("Dia = " + data.getDate());
//Dia da Semana
console.log("Dia da Semana (Ex: Segunda) = " + (data.getDay() + 1));
//Horas
console.log("Horas = " + data.getHours());
//Minutos
console.log("Minutos = " + data.getMinutes());
//Segundos
console.log("Segundos = " + data.getSeconds());
//Milisegundos
console.log("Milisegundos = " + data.getMilliseconds());
//TimeStamp
console.log("TimeStamp = " + data.getTime());
*/
//TimeStamp atual sem a variavel Data
console.log(Date.now());