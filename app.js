let listaDeNomesAdicionados = [];
let campo = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nomeParaAdicionar = document.getElementById('amigo').value;
    
    if (listaDeNomesAdicionados.includes(nomeParaAdicionar)) {
        alert('Esse nome já está na lista!');
    } else if (nomeParaAdicionar == '') {
        alert('Digite um nome válido por favor!');
    } else {
        listaDeNomesAdicionados.push(nomeParaAdicionar);
        exibeTextoNaTela();
        limparCampo();
    } 
}

function limparCampo() {
    let campoAmigoAdicionado = document.getElementById('amigo');
    campoAmigoAdicionado.value = '';
}

function exibeTextoNaTela() {
    campo.innerHTML = ""; 

    let contador = 0;
    while (contador < listaDeNomesAdicionados.length) {
        campo.innerHTML += `<li>${listaDeNomesAdicionados[contador]}</li>`;
        contador++;
    }
}

function sortearAmigo() {
    if (listaDeNomesAdicionados.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    
    let indiceSorteado = Math.round(Math.random() * (listaDeNomesAdicionados.length - 1));
    let nomeSorteado = listaDeNomesAdicionados[indiceSorteado];

    resultado.innerText = `O amigo secreto sorteado é: ${nomeSorteado}`;
    campo.innerHTML = "";
    listaDeNomesAdicionados = [];
}