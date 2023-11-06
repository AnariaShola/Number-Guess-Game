'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Correct Number`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 30;

// document.querySelector(`.guess`).value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

let score = 20;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // If there is no input
  if (!guess) {
    displayMessage(`😢 Please enter a guess`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`✨ Correct Number`);

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `❗ Too High!` : `❗ Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💀 You lose!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;

  document.querySelector(`.score`).textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.number`).style.width = `15rem`;

  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`body`).style.backgroundColor = `#222`;

  displayMessage(`Start guessing...`);

  document.querySelector(`.guess`).value = ``;
});
