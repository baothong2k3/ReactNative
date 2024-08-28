let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const againButton = document.querySelector('.again');

const initialBackgroundColor = '#222';
const initialNumberWidth = '15rem';

function restoreInitialValues() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageElement.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  guessInput.value = '';
  scoreElement.textContent = score;

  document.body.style.backgroundColor = initialBackgroundColor;
  numberElement.style.width = initialNumberWidth;
}

againButton.addEventListener('click', restoreInitialValues);