'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//global variables
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//functions
const currentPlayerChangeText = function (activePlayer, text) {
  document.getElementById(`current--${activePlayer}`).textContent = text;
};

const switchPlayer = function () {
  currentPlayerChangeText(activePlayer, 0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const updateCurrentScore = function (dice) {
  currentScore += dice;
  currentPlayerChangeText(activePlayer, currentScore);
};

const displayDice = function (dice) {
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${dice}.png`);
};

const randomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const resetGame = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  current0El.textContent = 0;
  current1El.textContent = 0;
  //make playing true
  playing = true;

  //change current score and active player
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  //get starting positions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  //add active player class
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

//rolling dice functionality
btnRollEl.addEventListener('click', function (e) {
  if (playing) {
    e.preventDefault();

    // generating a random dice roll
    const dice = randomNumber();

    //display dice
    displayDice(dice);

    //check if rolled a 1, if true, switch player
    if (dice !== 1) {
      //add dice to current score
      updateCurrentScore(dice);
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check score if players score is >- 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//reset game
btnNewEl.addEventListener('click', resetGame);
