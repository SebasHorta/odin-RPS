// CONSTANTS
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// GAME STATE
let humanScore = 0;
let computerScore = 0;

// DOM ELEMENTS
const choiceBtns = document.querySelectorAll(".container button");
const resetBtn = document.querySelector("#reset");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const results = document.querySelector(".results");

// GAME LOGIC
function getHumanChoice(choice) {
    if (choice === "rock") {
        return ROCK;
    } else if (choice === "paper") {
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
    switch (true) {
        case (humanChoice === ROCK && computerChoice === PAPER):
            return ["lose", "You lose! Paper beats Rock!"];
        case (humanChoice === ROCK && computerChoice === SCISSORS):
            return ["win", "You win! Rock beats Scissors!"];
        case (humanChoice === PAPER && computerChoice === ROCK):
            return ["win", "You win! Paper beats Rock!"];
        case (humanChoice === PAPER && computerChoice === SCISSORS):
            return ["lose", "You lose! Scissors beats Paper!"];
        case (humanChoice === SCISSORS && computerChoice === ROCK):
            return ["lose", "You lose! Rock beats Scissors!"];
        case (humanChoice === SCISSORS && computerChoice === PAPER):
            return ["win", "You win! Scissors beats Paper!"];
        default:
            return ["tie", "Tie"];
    }
}

// EVENT HANDLERS
function handleChoiceClick(e) {
    if (humanScore === 5 || computerScore === 5) return;
    const choice = e.target.id;
    const playerChoice = getHumanChoice(choice);
    const computerChoice = getComputerChoice();
    const [result, message] = playRound(playerChoice, computerChoice);
    if (result === "win") {
        humanScore++;
        playerPoints.textContent = humanScore;
        results.textContent = message;
    }
    else if (result === "lose") {
        computerScore++;
        computerPoints.textContent = computerScore;
        results.textContent = message;
    } else {
        results.textContent = message;
    }
    let final = "";
    if (humanScore === 5) final = "Player";
    else if (computerScore === 5) final = "Computer";
    if (final) {
        results.textContent = `${final} wins!`;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerPoints.textContent = 0;
    computerPoints.textContent = 0;
    results.textContent = "";
}

// EVENT LISTENERS
choiceBtns.forEach(btn => {
    btn.addEventListener("click", handleChoiceClick);
});

resetBtn.addEventListener("click", resetGame);