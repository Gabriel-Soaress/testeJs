
const ponto = document.getElementById('ponto');
const classe = document.getElementById('ClassesP');
const forca = document.getElementById('forca');
const agilidade = document.getElementById('agilidade');
const inteligencia = document.getElementById('inteligencia');

function atualizarPontos(forcaV, agilidadeV, inteligenciaV) {
    const totalPontos = forcaV + agilidadeV + inteligenciaV;
    ponto.innerHTML = `Pontos restantes: ${15 - totalPontos}`;
}

function pegarValores(){
    const valorForca = parseInt(forca.value)||0;
    const valorAgilidade = parseInt(agilidade.value)||0;
    const valorInteligencia = parseInt(inteligencia.value)||0;
    atualizarPontos(valorForca, valorAgilidade, valorInteligencia);
}

forca.addEventListener('input', pegarValores);
agilidade.addEventListener('input', pegarValores);
inteligencia.addEventListener('input', pegarValores);

