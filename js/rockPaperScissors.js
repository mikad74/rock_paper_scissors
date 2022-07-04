function computerPlays() {
  let hands = ["Rock", "Paper", "Scissors"];
  let rngNumber = Math.floor(Math.random() * 3);

  return hands[rngNumber];
}

function decideWinner(playerChoice, computerChoice) {
  let playerChoiceConcise = playerChoice.toUpperCase().slice(0, 1);
  let computerChoiceConcise = computerChoice.toUpperCase().slice(0, 1);
  let result = ""

  if (playerChoiceConcise == computerChoiceConcise) {
    result ="It's a tie!";
  } else if (playerChoiceConcise == "R" && computerChoiceConcise == "S") {
    result ="You win!";
  } else if (playerChoiceConcise == "P" && computerChoiceConcise == "R") {
    result ="You win!";
  } else if (playerChoiceConcise == "S" && computerChoiceConcise == "P") {
    result ="You win!";
  } else {
    result ="You loose!";
  }
  return result
}

function playAgain(previousResult) {
  let answer = prompt(`${previousResult}\nWant to play again?`);

  console.log(answer.toUpperCase().slice(0, 1));
  if (answer.toUpperCase().slice(0, 1) == "Y") {
    playRound();
  }
}

function playRound() {
  let computerChoice = computerPlays();
  let playerChoice = prompt("Welcome to Rock, Paper, Scissors \nPlease enter your choice: ");

  let result = decideWinner(playerChoice, computerChoice);

  playAgain(result);
}

playRound();
