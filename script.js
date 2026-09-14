// Variáveis do jogo
let numeroSorteado = 0;
let pontuacao = 0;

// Elementos do DOM
const inputGuess = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const scoreDisplay = document.getElementById('score');
const btnChutar = document.getElementById('btnChutar');
const btnNovoJogo = document.getElementById('btnNovoJogo');

// Função para sortear um número de 1 a 10
function sortearNumero() {
  numeroSorteado = Math.floor(Math.random() * 10) + 1;
}

// Inicializa o primeiro sorteio
sortearNumero();

// Função chamada ao clicar em "Chutar"
function jogar() {
  const chute = parseInt(inputGuess.value);

  // Validação da entrada
  if (isNaN(chute) || chute < 1 || chute > 10) {
    resultMessage.textContent = "Digite um número válido entre 1 e 10!";
    resultMessage.className = "result errou";
    return;
  }

  // Verificação do palpite
  if (chute === numeroSorteado) {
    resultMessage.textContent = "VOCÊ ACERTOU!";
    resultMessage.className = "result acertou";
    pontuacao++;
    scoreDisplay.textContent = pontuacao;

    // Prepara para a próxima jogada
    btnChutar.style.display = "none";
    btnNovoJogo.style.display = "block";
  } else {
    resultMessage.textContent = "ERROOOUU!";
    resultMessage.className = "result errou";
    
    // Mostra o botão para tentar novamente
    btnChutar.style.display = "none";
    btnNovoJogo.style.display = "block";
  }
}

// Função para preparar um novo sorteio mantendo a pontuação
function novoJogo() {
  sortearNumero();
  inputGuess.value = "";
  resultMessage.textContent = "";
  btnChutar.style.display = "block";
  btnNovoJogo.style.display = "none";
  inputGuess.focus();
}

// Permite pressionar "Enter" no input para chutar
inputGuess.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    if (btnChutar.style.display !== "none") {
      jogar();
    } else {
      novoJogo();
    }
  }
});