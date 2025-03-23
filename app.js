
function guessBtntrigger() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = document.getElementById('txtArea').value;
    let resultMessage = document.getElementById('resultMessage');

    if (userGuess.trim() === "") {
        resultMessage.innerHTML = '<div class="alert alert-warning">⚠️ Please enter a number!</div>';
        return;
    }

    if (userGuess == randomNumber) {
        resultMessage.innerHTML = '<div class="alert alert-success">Correct! You guessed the number!</div>';
    } else {
        resultMessage.innerHTML = '<div class="alert alert-danger">Wrong! Try again.</div>';
    }
}