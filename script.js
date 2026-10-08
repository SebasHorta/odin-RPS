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
      console.log("You lose! Paper beats Rock!");
      return "lose";
    case (humanChoice === ROCK && computerChoice === SCISSORS):
      console.log("You win! Rock beats Scissors!");
      return "win";
    case (humanChoice === PAPER && computerChoice === ROCK):
      console.log("You win! Paper beats Rock!");
      return "win";
    case (humanChoice === PAPER && computerChoice === SCISSORS):
      console.log("You lose! Scissors beats Paper!");
      return "lose";
    case (humanChoice === SCISSORS && computerChoice === ROCK):
      console.log("You lose! Rock beats Scissors!");
      return "lose";
    case (humanChoice === SCISSORS && computerChoice === PAPER):
      console.log("You win! Scissors beats Paper!");
      return "win";
    default:
      console.log("Tie");
      return "tie";
  }
}

// EVENT HANDLERS
function handleChoiceClick(e) {
  if (humanScore === 5 || computerScore === 5) return;
  const choice = e.target.id;
  const playerChoice = getHumanChoice(choice);
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  if (result === "win") humanScore++;
  else if (result === "lose") computerScore++;
  let final = "";
  if (humanScore === 5) final = "Player";
  else if (computerScore === 5) final = "Computer";
  if (final) {
    console.log(`${final} wins!`);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
}

// EVENT LISTENERS
choiceBtns.forEach(btn => {
  btn.addEventListener("click", handleChoiceClick);
});

resetBtn.addEventListener("click", resetGame);