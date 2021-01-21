//Criando um objeto de uma postagem
function criarPostagem(titulo, mensagem, autor, visualizacoees, autorC, mensagemC, estaAoVivo){
    return {
        titulo,
        mensagem,
        autor,
        visualizacoees,
        comentarios: [
            {autor: autorC, mensagem: mensagemC}
        ],
        estaAoVivo
    }
}

//Adicionando comentários a postagem
function adicionarComentario(postagem, autorC, mensagemC){
    postagem.comentarios.push({autor: autorC, mensagem: mensagemC})
}

let postagem1 = criarPostagem("O Menor Post", "Sem muito a declarar", "G.P.LOPES", 250, "R.Braga", "Pequeno", true);
console.log(postagem1);

adicionarComentario(postagem1, "Regina", "Interessante");

console.log(postagem1.comentarios[1].autor);

