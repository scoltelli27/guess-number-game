'use strict';
const message = document.querySelector('.message');
const scoreMessage = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
const mainNumber = document.querySelector('.number');
const highscoreText = document.querySelector('.highscore');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Again button
againBtn.addEventListener('click', function () {
  score = 20;
  scoreMessage.textContent = score;
  document.querySelector('.guess').value = '';
  mainNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  scoreMessage.textContent = score;
  mainNumber.textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No number in the input field
  if (!guess) {
    message.textContent = 'No number!';
  }

  // When the player wins
  else if (guess === secretNumber) {
    message.textContent = 'You win!';
    body.style.backgroundColor = '#60b347';
    mainNumber.style.width = '30rem';
    mainNumber.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highscoreText.textContent = highScore;
    }
  }

  // When the guessed number is wrong / When the player loses
  else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreMessage.textContent = score;
    } else {
      message.textContent = 'You lost!';
      scoreMessage.textContent = 0;
    }
  }

  // When the guessed number is too low / When the player loses
  /* else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      scoreMessage.textContent = score;
    } else {
      message.textContent = 'You lost!';
      scoreMessage.textContent = 0;
    }
  } */
});
