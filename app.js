let attempts = 0;
const maxAttempts = 5;

function guessBtntrigger() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = document.getElementById('txtArea').value;
    let resultMessage = document.getElementById('resultMessage');
    let guessButton = document.getElementById('guessButton');
    let roundCount = document.getElementById('roundCount');
    
    if (userGuess.trim() === "") {
        resultMessage.innerHTML = '<div class="alert alert-warning">⚠️ Please enter a number!</div>';
        return;
    }
    
    attempts++;
    roundCount.textContent = `Round: ${attempts} / ${maxAttempts}`;
    
    if (userGuess == randomNumber) {
        resultMessage.innerHTML = '<div class="alert alert-success">🎉 Correct! You guessed the number!</div>';
    } else {
        if (userGuess > randomNumber) {
            resultMessage.innerHTML = '<div class="alert alert-danger"> Try Another ⬇️ Number !</div>';
        }else if(userGuess < randomNumber){
            resultMessage.innerHTML = '<div class="alert alert-danger"> Try Another ⬆️ Number !</div>';
        }else{
            resultMessage.innerHTML = '<div class="alert alert-danger">❌ Something Went Wrong. !</div>';
            return ;
        }
        
    }
    
    if (attempts >= maxAttempts) {
        guessButton.setAttribute("disabled", "true"); // Ensure it gets applied
        resultMessage.innerHTML += '<div class="alert alert-info">🔒 Game Over! You have used all attempts.</div>';
    }
}