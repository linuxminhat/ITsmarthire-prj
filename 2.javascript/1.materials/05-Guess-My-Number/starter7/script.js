'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = document.querySelector('.guess').value;
    if (guessNumber == secretNumber) {
        console.log("Correct Number !!!");
        document.querySelector('.message').textContent = "Correct Number !!!";
        //View correct number 
        document.querySelector('.number').textContent = secretNumber;
        console.log(document.querySelector('.guess').value);

    } else if (guessNumber > secretNumber) {
        console.log("No it not correct !!!");
        document.querySelector('.message').textContent = "Not a correct Number !!!";
        score--;
        document.querySelector('.score').textContent = score;

    } else if (guessNumber < secretNumber) {
        console.log("No it not correct !!!");
        document.querySelector('.message').textContent = "Not a correct Number !!!";
        score--;
        document.querySelector('.score').textContent = score;
    }

})
//Its okay !!!
