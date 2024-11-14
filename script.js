let playerScore = 0;
let computerScore = 0;

function calculateWinner(playerMove) {
  const moves = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  const computerMove = moves[randomNumber];
  const playerMoveText = moves[playerMove - 1];

  document.getElementById(
    "player-move"
  ).src = `image/${playerMoveText.toLowerCase()}.png`;
  document.getElementById(
    "computer-move"
  ).src = `image/${computerMove.toLowerCase()}.png`;

  let winnerMessage;
  playerMove = playerMove - 1;
  if (playerMove === randomNumber) {
    winnerMessage = "It's a tie!";
  } else if (
    playerMove === randomNumber + 1 ||
    (playerMove === 0 && randomNumber === 2)
  ) {
    winnerMessage = "Player wins!";
    playerScore++;
  } else {
    winnerMessage = "Computer wins!";
    computerScore++;
  }

  document.getElementById("winner").textContent = winnerMessage;
  document.getElementById("winner").classList.remove("player", "computer");
  document
    .getElementById("winner")
    .classList.add(winnerMessage === "Player wins!" ? "player" : "computer");

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}
