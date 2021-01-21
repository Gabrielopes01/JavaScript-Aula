
const anfitrioes = ["cristian", "paulo", "rafaela"];
const convidados = [
    ["gabriel", "alice", "ana", "julia", "roberto"],
    ["sarah", "jessica"],
    ["julio", "dionisio", "iuri", "david"]
]

console.log(anfitrioes);


function verificaNome(){
    let nomeConvidado = document.getElementById("convidado").value;
    let nomeAnfritiao = document.getElementById("anfitriao").value;

    if (anfitrioes.includes(nomeAnfritiao.toLowerCase())){
        console.log("Anfitrião Encontrado");
        let index = anfitrioes.indexOf(nomeAnfritiao.toLowerCase());

        if(convidados[index].includes(nomeConvidado.toLowerCase())){
            console.log("Convidado Encontrado");
            document.getElementById("labelPesquisa").innerHTML = "Você pode entrar";
            return "";  
        }

    } else {
        console.log("Anfitrião não encotrado")
    }

    document.getElementById("labelPesquisa").innerHTML = "Você não pode entrar";

//    console.log(nomeConvidado);
}