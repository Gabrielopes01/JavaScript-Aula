verificaVelocidade(120);

function verificaVelocidade(velocidade) {
    const kmPorPonto = 5;
    if(velocidade >= 75){
        let pontos = Math.floor((velocidade - 70) / kmPorPonto);
        if (pontos > 12){
            console.log("Carteira Suspensa");
        } else {
            console.log("Acima da velocidade permitida, recebendo " + pontos + " pontos");
        }
    } else if (velocidade > 70 && velocidade < 75) {
        console.log("Acima da velocidade permitida, mas sem pontuação");
    } else {
        console.log("Velocidade OK");
    }
}