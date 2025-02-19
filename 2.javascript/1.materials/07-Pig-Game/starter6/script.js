'use strict';
//Get score of two player 
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
//Get current score of two player 
const currentScorePlayer1 = document.getElementById('current--0');
const currentScorePlayer2 = document.getElementById('current--1');
//Dice viewing
const dice = document.querySelector('.dice');
//Buttons
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

//Function 1 : Roll dice => Dice 
buttonRoll.addEventListener('click', function () {
    //Random
    const diceSlice = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceSlice}.png`;
    if (dice !== 1) {
        currentScore1 += diceSlice;
        currentScorePlayer1.textContent = currentScore1;
    } else {
        if (dice === 1) {

        }
    }
})