function inserir_elemento(num) {
    let numero = document.getElementById('tela_resultado').innerHTML;
    document.getElementById('tela_resultado').innerHTML = numero + num;
}

function deletar() {
    const tela = document.getElementById('tela_resultado').innerHTML = ' '
}

function apagar() {
    let tela = document.getElementById('tela_resultado').innerHTML;
    document.getElementById('tela_resultado').innerHTML = tela.substring(0, tela.length - 1)
}

function calcular() {
    let resultado = document.getElementById('tela_resultado').innerHTML;
    if (resultado) {
        document.getElementById('tela_resultado').innerHTML = eval(resultado)
    }
}