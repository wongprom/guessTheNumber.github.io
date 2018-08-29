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
