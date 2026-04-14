

const ponto = document.getElementById('ponto');
const classe = document.getElementById('ClassesP');
const forca = document.getElementById('forca');
const agilidade = document.getElementById('agilidade');
const inteligencia = document.getElementById('inteligencia');
const btnRecruta= document.getElementById('btnRecruta');
const cardConta = document.getElementById('herois_criados')
const nomeH = document.getElementById('nomeHeroi')

function atualizarPontos(forcaV, agilidadeV, inteligenciaV) {
    const totalPontos = forcaV + agilidadeV + inteligenciaV;
    let restoPontos = 15 - totalPontos;
    ponto.innerHTML = `Pontos restantes: ${restoPontos}`;

    if(restoPontos < 0){
        ponto.style.color ='red';
        btnRecruta.disabled = true;
    }else{
        ponto.style.color ='black';
        btnRecruta.disabled = false;
    }
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

function cria_heroi(){
    const novoHeroiCard = document.createElement('div');
    novoHeroiCard.classList.add('card_heroi');

    const nomeHeroiCard = document.createElement('h3');
    nomeHeroiCard.classList.add('nome_heroi');
    nomeHeroiCard.innerText = `${nomeH.value}`;

    const classeHeroiCard = document.createElement('p');
    classeHeroiCard.classList.add('classe_heroi');
    classeHeroiCard.innerText = `${classe.value}`;

    const dadosHeroiCard = document.createElement('p');
    dadosHeroiCard.classList.add('forca_heroi');
    dadosHeroiCard.innerText = `Força: ${forca.value} | Agilidade: ${agilidade.value} | Inteligencia: ${inteligencia.value}  `;

    novoHeroiCard.appendChild(nomeHeroiCard);
    novoHeroiCard.appendChild(classeHeroiCard);
    novoHeroiCard.appendChild(dadosHeroiCard);

    cardConta.appendChild(novoHeroiCard);
}






