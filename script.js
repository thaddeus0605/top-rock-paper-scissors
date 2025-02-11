const playerOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const getRandomNumber = Math.floor(Math.random() * playerOptions.length);
    return playerOptions[getRandomNumber];
}

function getHumanChoice() {
    return prompt('Please choose rock, paper, or scissors').toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log('You lose! Rock beats Scissors');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log('You win! Paper beats Rock.'); 
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log('You win! Rock beats Scissors!');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore +=1;
        console.log('You lose! Paper beats rock')
    } else if (humanChoice === 'sicssors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('You win! Scissors beats paper')
    } else if (humanChoice === computerChoice) {
        console.log('Its a tie!')
    }
}

function playGame() {
   const round = 5;

   for (let i = 0; i < round; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
   }

   alert(`Final score: Human: ${humanScore} Computer: ${computerScore}`);
}


playGame();