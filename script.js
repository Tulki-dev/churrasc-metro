let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...");
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value

    if (adultos < 0 || criancas < 0 || duracao <= 0) return



    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebida = bebidaPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalVinagrete = vinagretePP(duracao) * adultos + (vinagretePP(duracao) / 2 * criancas);
    let qdtTotalAlho = alhoPP(duracao) * adultos + (alhoPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} Pet's 2l de Bebida </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalVinagrete / 200)} Porção de vinagrete (200gr) </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalAlho / 3)} Pães de alho </p>`
}

function carnePP(duracao) {
    if (duracao >= 6) return 650;
    return 450;
}

function cervejaPP(duracao) {
    if (duracao >= 6) return 2000;
    if (duracao >= 4) return 1500;
    if (duracao >= 3) return 1000;
    return 700;
}

function bebidaPP(duracao) {
    if (duracao >= 6) return 1500;
    return 1000
}

function vinagretePP(duracao) {
    if (duracao >= 6) return 400;
    return 200
}

function alhoPP(duracao) {
    if (duracao >= 6) return 6;
    return 3
}