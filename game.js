// should be a way to assign numerical values to rock, paper, and scissors and compare those values instead of strings. could shorten code, but make less readable. 


function playRound(arg1, arg2) {

    let correctCase = arg1.toLowerCase();
    if (correctCase == arg2) {
        return "tie";
    }
    else if ((correctCase == 'rock' && arg2 == 'paper') || (correctCase == 'paper' && arg2 == 'scissors') || (correctCase == 'scissors' && arg2 == 'rock')) {
        return `Computer wins again...`;
    }
    else if((correctCase == 'rock' && arg2 == 'scissors') || (correctCase == 'scissors' && arg2 == 'paper') || (correctCase == 'paper' && arg2 =='rock')) {
        return `You win!`;
    }
}

let computerSelection;

function getComputerChoice() {
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

