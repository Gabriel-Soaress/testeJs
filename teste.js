//Definindo os elementos:
const divPai = document.getElementById('divPai');
const formulario = document.getElementById('formulario')
const nome = document.getElementById('nomeIp');
const idade = document.getElementById('idadeIp');
const data = document.getElementById('dataIp');
const email = document.getElementById('emailIp');



function pegarValores(){
    let nomeV = nome.value
    let idadeV = idade.value
    let dataV = data.value
    let emailV = email.value

    const cardDados = document.createElement('div')
    cardDados.classList.add('card_dados') //usamos o classlist aq pq ele permite adicionar ou remover classes simutaneas, o classname substitui apenas

    const cardDadosTitulo = document.createElement('p')
    cardDadosTitulo.classList.add('card_dadosPar')
    cardDadosTitulo.innerText = `${nomeV}`

    const cardDadosData = document.createElement('p')
    cardDadosData.classList.add('card_dadosPar')
    cardDadosData.innerText = `Data registro: ${dataV}`

    const cardDadosIdade = document.createElement('p')
    cardDadosIdade.classList.add('card_dadosPar')
    cardDadosIdade.innerText = `Idade : ${idadeV}`

    const cardDadosEmail = document.createElement('p')
    cardDadosEmail.classList.add('card_dadosPar')
    cardDadosEmail.innerText = `${emailV}`

    cardDados.appendChild(cardDadosTitulo)
    cardDados.appendChild(cardDadosData)
    cardDados.appendChild(cardDadosIdade)
    cardDados.appendChild(cardDadosEmail)

    document.getElementById('divCards').appendChild(cardDados)

    formulario.reset();
}