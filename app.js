// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//Get elements from Html
let ELgame = document.querySelector('#game'),
  ELminNum = document.querySelector('.min-num'),
  ELmaxNum = document.querySelector('.max-num'),
  ELguessBtn = document.querySelector('#guess-btn'),
  ELguessInput = document.querySelector('#guess-input'),
  ELmessage = document.querySelector('.message');

//Make min and max dynamic
ELminNum.textContent = min;
ELmaxNum.textContent = max;

//Listen for guess btn
ELguessBtn.addEventListener('click', function() {
  //Make input to int
  let guess = parseInt(ELguessInput.value);

  //Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    errorMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
});

//Error message
function errorMessage(message, color) {
  ELmessage.style.color = color;
  ELmessage.textContent = message;
}
