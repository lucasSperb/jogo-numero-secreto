const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumero();
const elementoMenor = document.getElementById('menor_valor');
const elementoMaior = document.getElementById('maior_valor');

function gerarNumero(){
    return parseInt(Math.random() * maiorValor + 1);
}

 console.log(numeroSecreto);

elementoMenor.innerHTML = menorValor;
elementoMaior.innerHTML = maiorValor;