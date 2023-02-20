// create variables for buttons, result, and scorebaord
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.querySelector('.results-container');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
const tieScore = document.querySelector('#tie');


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

//let computerPlay = getComputerChoice();

let playerTally = 0;
let computerTally = 0;
let tieTally = 0;

function playRound() {
    let player = this.id;
    let computer = getComputerChoice();

    if (player == computer) {
        results.textContent = 'tie';
        tieTally += 1;
        tieScore.textContent = tieTally;
        //return "tie";
    }
    else if ((player == 'rock' && computer == 'paper') || (player == 'paper' && computer == 'scissors') || (player == 'scissors' && computer == 'rock')) {
        results.textContent = 'computer wins again...'
        computerTally += 1;
        computerScore.textContent = computerTally;
       
        // return `Computer wins again...`;
    }
    else if((player == 'rock' && computer == 'scissors') || (player == 'scissors' && computer == 'paper') || (player == 'paper' && computer =='rock')) {
        results.textContent = 'You win!'
        playerTally += 1;
        playerScore.textContent = playerTally;
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
