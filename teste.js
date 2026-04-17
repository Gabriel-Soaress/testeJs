//Definindo os elementos:
const divPai = document.getElementById('divPai');
const formulario = document.getElementById('formulario')
const nome = document.getElementById('nomeIp');
const idade = document.getElementById('idadeIp');
const data = document.getElementById('dataIp');
const email = document.getElementById('emailIp');



function abrirInfo(Nome, Idade, Data, Email){
    const modal = document.createElement('dialog')
    modal.classList.add('MeuModal')
    modal.style.width = '20vw'
    modal.style.height = '20vh'


    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalDiv')
    modalDiv.style.display = 'flex'
    modalDiv.style.justifyContent = 'space-between'

    const modalTitulo = document.createElement('p')
    modalTitulo.classList.add('modalTitulo')
    modalTitulo.innerText = `Dados de: ${Nome}`

    const modalIdade = document.createElement('p')
    modalIdade.classList.add('modalPar')
    modalIdade.innerText = `Idade: ${Idade}`

    const modalData = document.createElement('p')
    modalData.classList.add('modalPar')
    modalData.innerText = `Data de registro: ${Data}`

    const modalEmail = document.createElement('p')
    modalEmail.classList.add('modalPar')
    modalEmail.innerText = `Email: ${Email}`

    const btnFechar = document.createElement('button')
    btnFechar.classList.add('btnFechar')
    btnFechar.style.backgroundColor = 'blue'
    btnFechar.style.border = 'black solid 1px'
    btnFechar.style.borderRadius = '10px'
    btnFechar.innerText = 'fechar'
    btnFechar.style.color = 'white'

    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.src = 'img/download.jpg'

    modalDiv.appendChild(modalTitulo)
    modalDiv.appendChild(btnFechar)
    modal.appendChild(modalDiv)
    modal.appendChild(modalIdade)
    modal.appendChild(modalData)
    modal.appendChild(modalEmail)
    modal.appendChild(foto)
    modalDiv.appendChild(btnFechar)

    document.getElementById('divCards').appendChild(modal)

    modal.showModal()

    btnFechar.addEventListener('click', () => {
        modal.close()
        modal.remove()
    })
}

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

    if(idadeV > 0 && idadeV < 18){
        cardDados.style.borderLeft = 'solid 10px yellow'
    }else if(idadeV >= 18 && idadeV < 60){
        cardDados.style.borderLeft = 'solid 10px green'
    }else if(idadeV >= 60){
        cardDados.style.borderLeft = 'solid 10px red'
    }else{
        cardDados.style.borderLeft = 'solid 10px blue';
    }

    const cardDadosEmail = document.createElement('p')
    cardDadosEmail.classList.add('card_dadosPar')
    cardDadosEmail.innerText = `${emailV}`

    cardDados.appendChild(cardDadosTitulo)
    cardDados.appendChild(cardDadosData)
    cardDados.appendChild(cardDadosIdade)
    cardDados.appendChild(cardDadosEmail)

    document.getElementById('divCards').appendChild(cardDados)

    formulario.reset();

    cardDados.addEventListener('click', () => {
        abrirInfo(nomeV, idadeV, dataV, emailV)
    })
}

