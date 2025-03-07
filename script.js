const buttons = document.querySelectorAll('button');
const resultsText = document.querySelector('.results');
const finalText = document.querySelector('.final-results');
const humanScoreText = document.querySelector('.humanScoreText');
const computerScoreText = document.querySelector('.computerScoreText');

const playerOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    return playerOptions[Math.floor(Math.random() * playerOptions.length)];
}

function updateScore(winner, message) {
    if (winner === 'human') {
        humanScore++;
        humanScoreText.textContent = humanScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
    round++;
    resultsText.textContent = message;
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { scissors: 'win', paper: 'lose' },
        paper: { rock: 'win', scissors: 'lose' },
        scissors: { paper: 'win', rock: 'lose' }
    };

    if (humanChoice === computerChoice) {
        resultsText.textContent = "It's a tie!";
        round++;
        return;
    }

    const result = outcomes[humanChoice]?.[computerChoice];

    if (result === 'win') {
        updateScore('human', `You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        updateScore('computer', `You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame(humanSelection) {
    if (round < 5) {
        playRound(humanSelection, getComputerChoice());
    } else {
        finalText.textContent = `Final Score: Human: ${humanScore} | Computer: ${computerScore}`;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => playGame(e.target.textContent.toLowerCase()));
});
