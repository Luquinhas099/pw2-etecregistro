// Javascript
// Capturando os elementos
const  inputVelocidade = document.querySelector('input#inputVelocidade');
const  resultado = document.querySelector('div#resultado');

// Definindo um limite de velocidade
const limite = 80;

function verificarVelocidade() {
    const velocidade = inputVelocidade.value;
    resultado.innerHTML = `sua velocidade atual é ${velocidade}. O limite da via é ${limite}`;
    // condição
    if(velocidade > limite) {
        resultado.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`;
    }
    else {
        resultado.innerHTML += `<p>Você está dentro do limite de velocidade! Dirija com cuidado!</p> `
    }
}