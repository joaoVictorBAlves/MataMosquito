//Definição de palco
var altura = 0
var largura = 0
var vidas = 1
const ajustaPalco = () => {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaPalco()

//Gerando posições randômicas
function posicaoAleatoria() {
    //Remover mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'

        vidas++
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
    mosquito.onclick = function(){
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
