
// Exercício 1
// Selecione o elemento com id "titulo" e:
// - altere o texto para "Título Alterado"
// - mude a cor do texto para azul
// ------------------------------------------------------

// seu código aqui

const titulo = window.document.getElementById("titulo");

titulo.innerText = 'Titulo Alterado';
titulo.style.color = 'blue';


// ------------------------------------------------------
// Exercício 2
// Selecione TODOS os elementos com a classe "paragrafo"
// e mude a cor de fundo (background-color) de todos eles para amarelo.
// ------------------------------------------------------

// seu código aqui

const paragrafo = window.document.getElementsByClassName('paragrafo');

paragrafo[0].style.backgroundColor = 'yellow';
paragrafo[1].style.backgroundColor = 'yellow';

// ------------------------------------------------------
// Exercício 3
// Selecione o elemento com id "caixa" e adicione um evento
// de "mouseover" (quando o mouse passar por cima) que:
// - altere o innerText para "Você passou o mouse aqui!"
// - mude a borda (border) para "3px solid red"
// - mude o tamanho da fonte (fontSize) para "20px"
// ------------------------------------------------------

// seu código aqui

const caixa = window.document.getElementById("caixa");

function passadinha() {
    caixa.innerText = 'Você passou o mouse aqui!';
    caixa.style.border = '3px solid red';
    caixa.style.fontSize = '20px';
}
caixa.addEventListener('mouseover', passadinha);


// ------------------------------------------------------
// Exercício 4
// Selecione o item da lista com id "item2"
// e mude seu texto para "Item alterado"
// ------------------------------------------------------

// seu código aqui

const lista = window.document.getElementById('item2');

lista.innerText = 'Item alterado'


// ------------------------------------------------------
// Exercício 5
// Selecione o botão com id "botao" e adicione um evento
// de "click" que:
// - altere o texto do botão para "Você clicou!"
// - mude a cor de fundo para verde
// - mude a cor do texto para branco
// ------------------------------------------------------

// seu código aqui

const botao = window.document.getElementById('botao');

function botadinha() {
    botao.InnerText = 'Você clicou!';
    botao.style.backgroundColor = 'green';
    botao.style.color = 'white';
}
botao.addEventListener('click' , botadinha);