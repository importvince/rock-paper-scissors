// create variables for buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.querySelector('.results-container');
const score = document.querySelector('.scoreboard')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

//let computerPlay = getComputerChoice();

function playRound() {
    let player = this.id;
    let computer = getComputerChoice();

    if (player == computer) {
        results.textContent = 'tie';
        //return "tie";
    }
    else if ((player == 'rock' && computer == 'paper') || (player == 'paper' && computer == 'scissors') || (player == 'scissors' && computer == 'rock')) {
        results.textContent = 'computer wins again...'
       
        // return `Computer wins again...`;
    }
    else if((player == 'rock' && computer == 'scissors') || (player == 'scissors' && computer == 'paper') || (player == 'paper' && computer =='rock')) {
        results.textContent = 'You win!'
        //return `You win!`;
    }
}

function getComputerChoice() {
    let computerSelection;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerSelection = 'rock';
    }
    else if (randomNumber == 2) {
        computerSelection = 'paper';
    }
    else computerSelection = 'scissors';
    return computerSelection;
}

let playerSelection;
