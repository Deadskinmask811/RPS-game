function getComputerChoice() {
    let choice = Math.floor((Math.random() * 100) / 33.333);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getHumanChoice() {
}
console.log(getComputerChoice());
