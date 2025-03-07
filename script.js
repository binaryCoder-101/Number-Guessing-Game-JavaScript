'use strict';

const numberGenerated = Math.trunc(Math.random()*20) + 1;

let score = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

function displayMessage(message) {
   document.querySelector('.message').textContent = message;
}

function displayScore(score) {
   document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', () => {

    let numberGuessed = Number(document.querySelector('.guess').value);

    if(!numberGuessed){
        displayMessage('⛔No number Guessed');
    }else if(numberGuessed === numberGenerated){
        displayMessage('Right Guess🎉🎉');
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        
        if(score > highScore){
            highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        }
    }else if(numberGuessed != numberGenerated){
        displayMessage(numberGuessed > numberGenerated? '📈Too high' : '📉Too low')
        score --;
        displayScore(score);
        if(score < 1){
        displayMessage('💥You Lost!');
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
     score = 20;
     displayScore(score);
     displayMessage('Start guessing');
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = ' ';
     const numberGenerated = Math.trunc(Math.random()*20) + 1;

})





