function getComputerChoice() {
  const cChoiceWord = ["paper", "rock", "scissors"];
  const cChoiceNumb = Math.floor(Math.random() * cChoiceWord.length);
  return cChoiceWord[cChoiceNumb];
}

function getHumanChoice() {
  let hChoice = window.prompt();
  return hChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw!";
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "Rock beats Scissors! Player win the Round!";
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "Paper beats Rock! Player win the Round!";
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "Scissors beats Paper! Player win the Round!";
  }
  computerScore++;
  return "Computer win the Round!";
}

function playGame() {
  const computer = getComputerChoice();
  const human = getHumanChoice();
  console.log(playRound(human, computer));

  const computer1 = getComputerChoice();
  const human1 = getHumanChoice();
  console.log(playRound(human1, computer1));

  const computer2 = getComputerChoice();
  const human2 = getHumanChoice();
  console.log(playRound(human2, computer2));

  const computer3 = getComputerChoice();
  const human3 = getHumanChoice();
  console.log(playRound(human3, computer3));

  const computer4 = getComputerChoice();
  const human4 = getHumanChoice();
  console.log(playRound(human4, computer4));

  if (humanScore === computerScore) {
    return "draw!";
  }
  if (humanScore > computerScore) return "Player win the Game!";
  return "Computer win the Game!"
}

console.log(playGame());

