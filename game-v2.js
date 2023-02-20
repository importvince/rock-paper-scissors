function playRound(arg1, arg2) {
    let correctCase = arg1.toLowerCase();
    let winner;
    if (correctCase == arg2) {
        winner = 'nobody';
        return winner;
    }
    else if ((correctCase == 'rock' && arg2 == 'paper') || (correctCase == 'paper' && arg2 == 'scissors') || (correctCase == 'scissors' && arg2 == 'rock')) {
        winner = 'computer';
        return winner;
    }
    else if((correctCase == 'rock' && arg2 == 'scissors') || (correctCase == 'scissors' && arg2 == 'paper') || (correctCase == 'paper' && arg2 =='rock')) {
        winner = 'player'
        return winner;
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

function game() {
    let playerSelection = prompt('rock, paper, or scissors?');
    let playerWinCount = 0;
    let computerWinCount = 0;
    let roundCount = 0;
    let bestOfFiveWinner;
    while (bestOfFiveWinner == undefined) { // best of 5 series
       let roundWinner = playRound(playerSelection, getComputerChoice());
       if (roundWinner == 'player' && playerWinCount < 3) {
            playerWinCount += 1;
            roundCount += 1;
            // code complete. logs to show this result below.
            console.log(`${roundWinner} wins this round`)
            console.log(`player has ${playerWinCount} wins and computer has ${computerWinCount} wins`) 
            console.log(`${roundCount} round(s) have been played.`)
        }
        else if (roundWinner == 'computer' && computerWinCount < 3) {
            computerWinCount += 1;
            roundCount += 1;
            // code coplete. logs to show this result below.
            console.log(`${roundWinner} wins this round`)
            console.log(`computer has ${computerWinCount} wins and player has ${playerWinCount} wins`) 
            console.log(`${roundCount} round(s) have been played.`)
        } 
        else if (roundWinner == 'player' && playerWinCount == 3) {
            bestOfFiveWinner = 'player';
            // code complete. log to show result below. 
            console.log(`${bestOfFiveWinner} wins the best of 5 series`);
            break;
        }
        else if (roundWinner == 'computer' && computerWinCount == 3) {
            bestOfFiveWinner = 'computer';
            // code complete. log to show result below. 
            console.log(`${bestOfFiveWinner} wins the best of 5 series`);
            break;
        }
        else {
            roundWinner == 'nobody'
            roundCount += 1;
            // code complete. logs to show result below. 
            console.log(`${roundWinner} wins this round...`);
            console.log(`${roundCount} round(s) have been played.`)
        }
    }
}