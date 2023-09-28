'use strict';

//Selecting Elements
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

let currentScore = 0;

//rolling dice functionality
btnRollEl.addEventListener('click', function (e) {
  e.preventDefault();

  // generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${dice}.png`);

  //check if rolled a 1, if true, switch player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    //switch to next player
  }
});
