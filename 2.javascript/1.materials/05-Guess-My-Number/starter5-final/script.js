'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
    let inputNumber = Number(document.querySelector('.guess').value);
    if (inputNumber === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = "CORRECT !!! ";
    } else if (inputNumber > secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "TOO HIGH !!!";
    } else if (inputNumber < secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "TOO LOW !!!";
    }
})