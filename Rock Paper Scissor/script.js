// "use strict";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const reset = document.getElementById("reset");

const playerImg = document.querySelector(".player-img");
const computerImg = document.querySelector(".computer-img");

const winMsg = document.querySelector(".win-msg");

const playerScores = document.querySelector("#player-score");
const computerScores = document.querySelector("#computer-score");

const content = document.getElementById("content");

const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

const score = JSON.parse(localStorage.getItem("wins")) || {
  playerScore: 0,
  computerScore: 0,
};

function computerPick() {
  return Math.floor(Math.random() * 3);
}

function saveWins() {
  localStorage.setItem("wins", JSON.stringify(score));
}

function playGame(playerPick) {
  const computerMove = computerPick();

  if (computerMove === playerPick) {
    winMsg.textContent = "aah Draw 🙏";
    console.log(`draw`);
  } else if (
    (computerMove === SCISSOR && playerPick === ROCK) ||
    (computerMove === ROCK && playerPick === PAPER) ||
    (computerMove === PAPER && playerPick === SCISSOR)
  ) {
    console.log(`you win`);
    winMsg.textContent = "You Won 🎉";
    score.playerScore++;
    playerScores.textContent = score.playerScore;
  } else {
    console.log(`computer win`);
    winMsg.textContent = "Computer Won 😒";
    score.computerScore++;
    computerScores.textContent = score.computerScore;
  }

  if (playerPick === ROCK) {
    playerImg.src = "assets/rock.png";
    playerImg.style.transform = "scaleX(-1)";
    playerImg.style.display = "block";
  } else if (playerPick === PAPER) {
    playerImg.src = "assets/paper.png";
    playerImg.style.display = "block";
  } else if (playerPick === SCISSOR) {
    playerImg.src = "assets/scissor.png";
    playerImg.style.display = "block";
  }
  if (computerMove === ROCK) {
    computerImg.src = "assets/rock.png";
    computerImg.style.display = "block";
  } else if (computerMove === PAPER) {
    computerImg.src = "assets/paper.png";
    computerImg.style.display = "block";
  } else if (computerMove === SCISSOR) {
    computerImg.src = "assets/scissor.png";
    computerImg.style.display = "block";
  }

  saveWins();
  console.log(score);
  console.log(computerMove);
}

rock.addEventListener("click", () => {
  playGame(ROCK);
});
paper.addEventListener("click", () => {
  playGame(PAPER);
});
scissor.addEventListener("click", () => {
  playGame(SCISSOR);
});

reset.addEventListener("click", () => {
  score.playerScore = 0;
  score.computerScore = 0;
  saveWins();
  playerScores.textContent = score.playerScore;
  computerScores.textContent = score.computerScore;
});

const setmode = document.querySelector(".setmode");

setmode.addEventListener("click", () => {
  if (setmode.src.includes("sleep-mode.png")) {
    setmode.src = "assets/light-mode.png";
    document.body.style.backgroundColor = "#1E1E1E";
    document.body.style.color = "#fff";
    setmode.style.filter = "invert(100%)";
    playerImg.style.filter = "invert(100%)";
    computerImg.style.filter = "invert(100%)";
  } else {
    setmode.src = "assets/sleep-mode.png";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    setmode.style.filter = "invert(none)";
    playerImg.style.filter = "invert(none)";
    computerImg.style.filter = "invert(none)";
  }
});
