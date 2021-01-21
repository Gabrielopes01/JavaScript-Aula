//Criando um metodo construtor de uma postagem
function Postagem(titulo, mensagem, autor, estaAoVivo){
        this.titulo = titulo,
        this.mensagem = mensagem,
        this.autor = autor,
        this.visualizacoes = 0
        this.comentarios = [],
        this.estaAoVivo = false
}

//Adicionando comentários a postagem
function adicionarComentario(postagem, autorC, mensagemC){
    postagem.comentarios.push({autor: autorC, mensagem: mensagemC})
}


let postagem1 = new Postagem("O Menor Post", "Sem muito a declarar", "G.P.LOPES");
console.log(postagem1);