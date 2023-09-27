'use strict';

// //grabs the element from HTML
// const message = document.querySelector('.message');

// console.log(message.textContent);

// //changes text content of message element
// message.textContent = 'Correct Number';

// //updating the number and score elements

// document.querySelector('.score').textContent = 10;

// const guess = document.querySelector('.guess');

// console.log(guess.value);
// guess.value = 23;

//document selectors
const check = document.querySelector('.check');
const body = document.querySelector('body');
const hiddenNumber = document.querySelector('.number');
const reset = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

let score = 20;
let highScore = 0;
let randomNumber;

const getRandomNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

const changeMessage = function (string) {
  const message = document.querySelector('.message');
  message.textContent = string;
};

const reduceScore = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const playingGame = function (string) {
  if (score > 1) {
    changeMessage(string);
    reduceScore();
  } else {
    document.querySelector('.score').textContent = 0;
    changeMessage('You Lost!');
  }
};

const checkHighScore = function () {
  if (score > highScore) {
    highScoreEl.textContent = score;
    highScore = score;
  }
};

const changeGameState = function (message, color, size, hiddenNum) {
  changeMessage(message);
  body.style.backgroundColor = color;
  hiddenNumber.style.width = size;
  hiddenNumber.textContent = hiddenNum;
};

const resetGame = function () {
  changeGameState('Start guessing...', '#222', '15rem', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  score = 20;
  randomNumber = getRandomNumber();
};

const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    changeMessage('No Number');
  } else if (guess === randomNumber) {
    changeGameState('Correct Number!', 'green', '30rem', randomNumber);
    checkHighScore();
  } else if (guess > randomNumber) {
    playingGame('Too High');
  } else if (guess < randomNumber) {
    playingGame('Too Low');
  }
};

randomNumber = getRandomNumber();

check.addEventListener('click', function (e) {
  e.preventDefault();
  checkNumber();
});

reset.addEventListener('click', resetGame);
