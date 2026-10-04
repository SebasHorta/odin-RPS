const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getHumanChoice() {
    const playerChoice = prompt("Enter your choice (Rock, paper, or scissors): ").toLowerCase();
    if (playerChoice === "rock") {
        return ROCK;
    } else if (playerChoice === "paper") {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    // w = win, l = lose, t = tie
    switch (true) {
        case (humanChoice === ROCK && computerChoice === PAPER):
            console.log("You lose! Paper beats Rock!");
            return "l";
        case (humanChoice === ROCK && computerChoice === SCISSORS):
            console.log("You win! Rock beats Scissors!");
            return "w";
        case (humanChoice === PAPER && computerChoice === ROCK):
            console.log("You win! Paper beats Rock!");
            return "w";
        case (humanChoice === PAPER && computerChoice === SCISSORS):
            console.log("You lose! Scissors beats Paper!");
            return "l";
        case (humanChoice === SCISSORS && computerChoice === ROCK):
            console.log("You lose! Rock beats Scissors!");
            return "l";
        case (humanChoice === SCISSORS && computerChoice === PAPER):
            console.log("You win! Scissors beats Paper!");
            return "w";
        default:
            console.log("Tie");
            return "t";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const score = playRound(humanSelection, computerSelection);
        if (score === "w") humanScore++;
        else if (score === "l") computerScore++;
    }
    let final = "";
    if (humanScore > computerScore) final = "Player";
    else if (computerScore > humanScore) final = "Computer";
    else final = "Tie, no one";
    console.log(`${final} wins!`);
}

// playGame();