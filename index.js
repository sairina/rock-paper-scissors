let game = new Game();
let userChoice = '';
let computerChoice = '';
let result = '';
let buttons = document.getElementsByClassName('button');
let playerChoiceDisplay = document.getElementById('player_choice');
let computerChoiceDisplay = document.getElementById('computer_choice');
let resultDisplay = document.getElementById('result');

function Game() {
  this.computerInput = function () {
    this.computerChoice = Math.random();
    if (this.computerChoice < 0.34) {
      return this.computerChoice = 'rock';
    } else if (this.computerChoice <= 0.67) {
      return this.computerChoice = 'paper';
    } else {
      return this.computerChoice = 'scissors';
    }
  }

  this.compare = function (userChoice, computerChoice) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        userChoice = this.id;
        playerChoiceDisplay.innerHTML = 'player: ' + userChoice;

        computerChoice = game.computerInput();
        computerChoiceDisplay.innerHTML = 'computer: ' + computerChoice;
        result = game.compare(userChoice, computerChoice);
        resultDisplay.innerHTML = 'Result: ' + result;
      }, false);
    }
  }
}

game.computerInput();