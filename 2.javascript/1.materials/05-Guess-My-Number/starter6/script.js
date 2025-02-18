'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if (guess == secretNumber) {
        //Wining
        document.querySelector('.message').textContent = "Correct Number ";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        //Choi den khi thang thi thoi 
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too high";
        score--;
        document.querySelector('.score').textContent = score;

    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too low";
        score--;
        document.querySelector('.score').textContent = score;

    }
})
document.querySelector('.again').addEventListener('click', function () {
    //Ve lai mau nhu cu 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = '?';
    //Cai dat lai button check
    document.querySelector('.guess').textContent = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '20';



})