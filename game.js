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

function playGame(numOfRounds) {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = numOfRounds;

    function playRound(humanChoice, computerChoice) {
        let playerChoice = humanChoice;
        let aiChoice = computerChoice;
        if (playerChoice === aiChoice) {
            console.log("Tie!");
            return;
        }
        switch (playerChoice) {
            case "rock":
                if (aiChoice === "paper") {
                    console.log("You lose");
                    return computerScore++;
                } else {
                    console.log("You Win!");
                    return humanScore++;
                }
            case "paper":
                if (aiChoice === "scissors") {
                    console.log("You lose");
                    return computerScore++;
                } else {
                    console.log("You Win!");
                    return humanScore++;
                }
            case "scissors":
                if (aiChoice === "rock") {
                    console.log("You lose");
                    return computerScore++;
                } else {
                    console.log("You Win!");
                    return humanScore++;
                }
        }
    }
    //play 5 rounds
    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    //declare winner
    if (humanScore == computerScore) {
        console.log("TIE!");
        return;
    } else if (humanScore > computerScore) {
        console.log("You win!");
        return;
    } else {
        console.log("Computer wins!");
        return;
    }
}

playGame(5);
