const botao1 = window.document.getElementsByClassName('button')[0]
const botao2 = window.document.getElementsByClassName('button')[1]
const botao3 = window.document.getElementsByClassName('button')[2]
const vermelho = window.document.getElementsByClassName('red')[0]
const amarelo = window.document.getElementsByClassName('yellow')[0]
const verde = window.document.getElementsByClassName('green')[0]

function parar() {
    vermelho.style.backgroundColor = 'red';
}
botao1.addEventListener('click',parar)


function atenção() {
    amarelo.style.backgroundColor = 'yellow';
}


function prosseguir() {
    verde.style.backgroundColor = 'green';
}