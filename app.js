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
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if right number
  if (guess === winningNum) {
    //Game over - won
    gameOver(true, `${winningNum} is the winning number, you win!!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over - lost
      gameOver(
        false,
        `Game over, you lost. The winning number was ${winningNum}`
      );
    } else {
      //Game continues - wrong aswer
      //Change border color
      ELguessInput.style.borderColor = 'red';

      //clear input
      ELguessInput.value = '';

      //Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  //Disable input
  ELguessInput.disabled = true;
  //Change border color
  ELguessInput.style.borderColor = color;
  //Change color
  ELmessage.style.color = color;
  //Winning message
  setMessage(msg);
}

//Set message
function setMessage(message, color) {
  ELmessage.style.color = color;
  ELmessage.textContent = message;
}
