function criarFaixa(tooltip, min, max){
    return {
        tooltip,
        min,
        max
    }
}

let faixas = [
    criarFaixa("Até R$700", 0, 100),
    criarFaixa("De R$700 a R$1000", 00, 1000),
    criarFaixa("R$1000 ou mais", 1000, 999999)
];

console.log(faixas);
