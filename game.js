function getComputerChoice() {
    let choice = Math.floor((Math.random() * 100) / 33.333);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (Rock, Paper or Scissors: ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice;
    let aiChoice = computerChoice;
    if (playerChoice === aiChoice) {
        console.log("Tie!");
    }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

