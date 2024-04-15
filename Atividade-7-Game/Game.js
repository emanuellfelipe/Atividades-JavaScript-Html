let targetNumber, guessCount, guesses;

function startNewGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    guesses = [];
    document.getElementById('message').textContent = '';
    document.getElementById('guessList').innerHTML = '';
}

function resetGame() {
    if (guessCount > 0 && guessCount < 5) {
        alert('Você ainda tem tentativas restantes. Se você reiniciar agora, essas tentativas serão perdidas.');
        let userInput = prompt('Digite SIM para confirmar a reinicialização do jogo.');
        if (userInput.toUpperCase() === 'SIM') {
            startNewGame();
        }
    } else {
        startNewGame();
    }
}

function makeGuess() {
    let guess = parseInt(document.getElementById('guess').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Por favor, insira um número válido de 1 a 100.');
        return;
    }
    if (guesses.includes(guess)) {
        alert('Você já tentou esse número! Por favor, tente um número diferente.');
        return;
    }
    guessCount++;
    let message = 'Palpite ' + guessCount + ': ' + guess;
    if (guess === targetNumber) {
        message += ' - Acertou!';
        document.getElementById('message').textContent = 'Parabéns! Você acertou o número em ' + guessCount + ' tentativas.';
    } else if (guessCount === 5) {
        message += ' - Errou. O número era ' + targetNumber + '.';
        document.getElementById('message').textContent = 'Você esgotou todas as tentativas! O número era ' + targetNumber + '.';
    } else {
        message += guess < targetNumber ? ' - O número alvo é maior.' : ' - O número alvo é menor.';
        document.getElementById('message').textContent = 'Não é esse o número. Você tem ' + (5 - guessCount) + ' tentativas restantes.';
    }
    guesses.push(guess);
    let listItem = document.createElement('li');
    listItem.textContent = message;
    document.getElementById('guessList').appendChild(listItem);
}

startNewGame();
