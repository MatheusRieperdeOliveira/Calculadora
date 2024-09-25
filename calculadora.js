const corpo_calculadora = window.document.querySelector(".corpo_da_calculadora")
const tela = window.document.getElementById('tela')
const botao = window.document.getElementById('botoes')

const cliquei = (numero) =>{
    tela.innerText = numero
}

tela.addEventListener