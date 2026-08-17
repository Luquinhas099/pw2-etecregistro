const nome = window.prompt('Digite seu nome: ');
const anodenascimento = window.prompt('Digite seu ano de nascimento:');
const cidade = window.prompt('Digite a sua cidade: ');
const salario = Number(window.prompt('Digite seu salário: '));

document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br>`);

// calculo para descobrir idade
const idade = 2026 - anodenascimento;
document.write(`Sua idade é ${idade} anos<br>`);

document.write(`Sua cidade em letras maiúsculas é ${cidade.toUpperCase()}<br>`);

document.write(`O nome da sua cidade possui ${cidade.length} caracteres<br>`);

document.write(`Seu salário em reais é ${salario.toLocaleString('pt-br', {style: "currency", currency:'BRL'})}<br>`);

const salariod = salario/5.22;
document.write(`Seu salário em dolares é ${salariod.toLocaleString('pt-br', {style: "currency", currency:'USD'})}<br>`);

const salarioe = salario/6.05;
document.write(`Seu salário em euros é ${salarioe.toLocaleString('pt-br', {style: "currency", currency:'EUR'})}<br>`);