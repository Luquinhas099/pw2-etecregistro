// JavaScript
const nome = window.prompt('Qual é o seu nome?');

// Contando caracteres
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} caracteres<br>`);

// alterando tudo para maiusculo
document.write(`Seu nome em letra maiúscula é <strong>${nome.toUpperCase()}</strong><br>`);

// alterando tudo para minusculo
document.write(`Seu nome em letra minúscula é <strong>${nome.toLowerCase()}</strong><br>`);


// Formatando numeros
const salario = Number(window.prompt('Digite seu salario'));

// inserindo casas decimais
document.write(`Seu salário com casas decimais é ${salario.toFixed(2)}!<br>`);

// alterando o identificador de casas decimais(trocou o ponto pela vírgula)
document.write(`Seu salario com casas decimais com vírgula é ${salario.toFixed(2).replace('.', ',')}<br>`);

// formatação para moeda(real)
document.write(`Seu salário em reais é ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}<br>`);

// dolar
const salariodolar = salario/5.22;
document.write(`Seu salário em dolares é ${salariodolar.toLocaleString('en', {style: 'currency', currency: 'USD'})}<br>`);

// euro
const salarioeuro = salario/6.05;
document.write(`Seu salário em euro é ${salarioeuro.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}<br>`);
