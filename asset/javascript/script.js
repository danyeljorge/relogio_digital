const horasAtual = document.getElementById("horas");
const dataAtual = document.getElementById("data");

function relogio() {
const dataHora = new Date();

horasAtual.textContent = dataHora.toLocaleTimeString('pt-BR');
dataAtual.textContent = dataHora.toLocaleDateString('pt-BR');
}



relogio();

setInterval(relogio, 1000);