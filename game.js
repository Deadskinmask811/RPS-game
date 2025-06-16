let humanScore = 0;
let computerScore = 0;
const scoreToWin = 5;

const scores = document.querySelector("#scores")
const container = document.querySelector("#container");

const humanScoreDisplay = document.createElement("h1");
const computerScoreDisplay = document.createElement("h1");
humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;

const rockButton = document.createElement("button");
rockButton.textContent = "ROCK!";
const paperButton = document.createElement("button");
paperButton.textContent = "PAPER!";
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS!";

scores.appendChild(humanScoreDisplay);
scores.appendChild(computerScoreDisplay);

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

function playRock() {
    playRound("rock", getComputerChoice());
}

function playPaper() {
    playRound("paper", getComputerChoice());
}

function playScissors() {
    playRound("scissors", getComputerChoice());
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;


}

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

function playRound(string, computerChoice) {
    let playerChoice = string;
    let aiChoice = computerChoice;

    switch (playerChoice) {
        case "rock":
            if (aiChoice === "paper") {
                computerScore++;
                break;
            } else if (playerChoice === aiChoice) {
                break;
            } else {
                humanScore++;
                break;
            }
        case "paper":
            if (aiChoice === "scissors") {
                computerScore++;
                break;
            } else if (playerChoice === aiChoice) {
                break;
            } else {
                humanScore++;
                break;
            }
        case "scissors":
            if (aiChoice === "rock") {
                computerScore++;
                break;
            } else if (playerChoice === aiChoice) {
                break;
            } else {
                humanScore++;
                break;
            }
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === scoreToWin) {
        console.log("You win!");
        resetGame();
    } else if (computerScore === scoreToWin) {
        console.log("Computer Wins!");
        resetGame();
    }

}
