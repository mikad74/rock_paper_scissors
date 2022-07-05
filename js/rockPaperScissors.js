let runningScore = [0,0]

function computerPlays() {
  let hands = ["rock", "paper", "scissors"];
  let rngNumber = Math.floor(Math.random() * 3);

  return hands[rngNumber];
}

function decideWinner(playerChoice, computerChoice) {
  let playerChoiceConcise = playerChoice.toUpperCase().slice(0, 1);
  let computerChoiceConcise = computerChoice.toUpperCase().slice(0, 1);
  let result = ""

  if (playerChoiceConcise == computerChoiceConcise) {
    result = ["It's a tie!", 2];
  } else if (playerChoiceConcise == "R" && computerChoiceConcise == "S") {
    result = ["You win!", 1];
  } else if (playerChoiceConcise == "P" && computerChoiceConcise == "R") {
    result = ["You win!", 1];
  } else if (playerChoiceConcise == "S" && computerChoiceConcise == "P") {
    result = ["You win!", 1];
  } else {
    result = ["You loose!", 0];
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

function playRound(playerChoice) {
  let computerChoice = computerPlays();

  let result = decideWinner(playerChoice, computerChoice);

  showGame(playerChoice, computerChoice)
  printResult(result)
  updateScore(result)

}

function updateScore(result) {
  const score = document.querySelector(".score")
  const div = document.createElement("div")
  runningScore[1 - result[1]]++
  div.innerText = `${runningScore[0]} - ${runningScore[1]}`
  score.innerHTML = ""
  score.appendChild(div)
  if (runningScore[0] >= 5) {
    endGame("player")
  }
  else if (runningScore[1] >= 5) {
    endGame("computer")
  }
}


function endGame(winner) {
  const p = document.querySelector(".current-game p")
  p.innerHTML = `<strong>${winner.toUpperCase()}</strong> won the game. \nResetting the score. Click a button to play a new game`
  p.style.fontSize = "1.2em"
  console.log(p)
  runningScore = [0,0]
}

function initPage() {
  const currentGame = document.querySelector(".current-game")
  const p = document.createElement("p")
  p.innerText = "Welcome to Rock, Paper, Scissors. Please make your choice! First to 5 wins"
  p.style.fontSize = "1.2em"
  currentGame.appendChild(p)
}

function buttonClick(button) {
  playRound(button.target.className)
}

function showGame(playerChoice, computerChoice) {
  const container = document.querySelector(".previous-game")
  container.innerHTML = ""
  const playerDiv = document.createElement("div")
  playerDiv.innerText = "YOU"
  const computerDiv = document.createElement("div")
  computerDiv.innerText = "COMPUTER"
  const playerImg = document.createElement("img")
  playerImg.src = `../images/${playerChoice}.svg`
  const div = document.createElement("div")
  div.innerText = "vs."
  const computerImg = document.createElement("img")
  computerImg.src = `../images/${computerChoice}.svg`
  playerDiv.appendChild(playerImg)
  container.appendChild(playerDiv)
  container.appendChild(div)
  container.appendChild(computerDiv)
  computerDiv.appendChild(computerImg)
}

function printResult(result) {
  const p = document.querySelector(".current-game p")
  p.innerHTML = `<strong>${result[0]}</strong> Click a button to play again`
  p.style.fontSize = "1.2em"

}

initPage()

const buttons = document.querySelectorAll("button")
buttons.forEach(button => button.addEventListener("click", buttonClick))
