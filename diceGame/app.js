const player1Score = document.querySelector(".player1Score");
const player2Score = document.querySelector(".player2Score");
const player1Dice = document.querySelector(".player1Dice");
const player2Dice = document.querySelector(".player2Dice");

const message = document.querySelector(".message");
const restartButton = document.querySelector(".restartBtn");
const rollButton = document.querySelector(".rollBtn");

let player1Turn = true;
let player1Total = 0;
let player2Total = 0;

function rollDice() {
  //   let random = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    let random = Math.floor(Math.random() * 6) + 1;
    if (random === 3) {
      return;
    }
    message.textContent = "Player 2 Turn";
    player1Dice.textContent = random;

    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    player2Dice.textContent = "-";
    player1Total += random;
    player1Score.textContent = player1Total;

    if (player1Total >= 30) {
      message.textContent = "Player 1 wins!";
      message.style.color = "#404337";
      rollButton.style.backgroundColor = "#8b9178";
      rollButton.removeEventListener("click", rollDice);
      restartButton.style.display = "block";
      restartButton.addEventListener("click", restart);
    }
  }

  if (!player1Turn) {
    let random = Math.floor(Math.random() * 6) + 1;

    message.textContent = "Player 1 Turn";
    player2Dice.textContent = random;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player1Dice.textContent = "-";
    player2Total += random;
    player2Score.textContent = player2Total;

    if (player2Total >= 30) {
      message.textContent = "Player 2 wins!";
      message.style.color = "#edcbb1";
      rollButton.style.backgroundColor = "#8b9178";
      rollButton.removeEventListener("click", rollDice);
      restartButton.style.display = "block";
      restartButton.addEventListener("click", restart);
    }
  }

  player1Turn = !player1Turn;
}

function restart() {
  player1Total = 0;
  player2Total = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  message.textContent = "Player 1 Turn";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.style.color = "black";
  rollButton.style.backgroundColor = "#002500";
  rollButton.addEventListener("click", rollDice);
  restartButton.style.display = "none";
}

rollButton.addEventListener("click", rollDice);
