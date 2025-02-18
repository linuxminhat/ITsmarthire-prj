'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number !!!";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20);
// document.querySelector('.number').textContent = secretNumber;
let myScore = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guessValue = document.querySelector('.guess').value;
    console.log(guessValue);
    //When there is no input
    if (!guessValue) {
        const messageLog1 = document.querySelector('.message').textContent = "No this is not number i guess !";
        console.log(messageLog1);
        //When player win 
    } else if (guessValue == secretNumber) {
        const messageLog2 = document.querySelector('.message').textContent = "This is the correct number i guess !";
        document.querySelector('.number').textContent = secretNumber;
        console.log(messageLog2);
        //Change color background to green
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (myScore > highscore) {
            highscore = myScore;
            document.querySelector('.highscore').textContent = highscore;
        }
        //When guess is too high
    } else if (guessValue > secretNumber) {
        myScore--;
        document.querySelector('.score').textContent = myScore;
        const messageLog3 = document.querySelector('.message').textContent = "Too high";
        console.log(messageLog3);
        //When guess is too low
    } else {
        myScore--;
        document.querySelector('.score').textContent = myScore;

        const messageLog4 = document.querySelector('.message').textContent = "Too low";
        console.log(messageLog4);
    }
});
document.querySelector('.again').addEventListener('click', function () {
    myScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = myScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

