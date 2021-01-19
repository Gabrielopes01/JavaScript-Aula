let array = [90,90,90];

console.log(media(array));

function media(notas) {
    let soma = 0;
    let media = 0;
    for (let valor of notas){
        soma += valor;
    }
    
    media = soma / notas.length;

    if (media <= 59) return "F";
    if ( media <= 69) return "D";
    if (media <= 79) return "C";
    if (media <= 89) return "B";
    return "A";

}