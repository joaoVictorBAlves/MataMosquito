//Definição de palco
var altura = 0
var largura = 0
var vidas = 1
var tempo = 7
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
}
console.log("tempo: ",criaMosquitoTempo)

const ajustaPalco = () => {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaPalco()

var cronometro = setInterval(() => {
    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }
}, 1000)
//Gerando posições randômicas
function posicaoAleatoria() {
    //Remover mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    //Definir posições
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log("pX: " + posicaoX + " pY: " + posicaoY)

    //Criar o elemento mosquito e adicionando no html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

}
//Varia a classe com diferentes tamanhos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// Interação
