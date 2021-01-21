//Input = Inserindo valores
//let nome = prompt("Olá, qual seu nome?");

//document.getElementById("nome").innerHTML = "Bem Vindo " + nome;

function escolherNome(){
    let nome = prompt("Olá, qual seu nome?");
    document.getElementById("nome").innerHTML = "Bem Vindo " + nome;
    document.getElementById("botao").remove();
}


function verificaIdade(){
    while (true) {
        let idade = parseInt(prompt("Qual sua idade"), 10);
        console.log(typeof(idade));
        if(isNaN(idade)){
            alert("Idade incorreta, insira um número válido");
        } else {
            idade > 18 ? alert("Você é maior de idade") : alert("Você é menor de idade");
            break;
        }
        
    }

}



//document.getElementById("botao").click()   //Executa um clique do botao