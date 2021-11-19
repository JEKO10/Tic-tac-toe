const turn = document.querySelector("#turn");
const gameField = document.querySelectorAll(".gameField");
const reset = document.querySelector("button");
const playerWin = document.querySelector(".playerWin");
const winner = document.querySelector("#winner");
let counter = 0;
let player;
let playerTurn;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  for (let combo of winningCombos) {
    let combination = "";
    for (let index of combo) {
      combination += gameField[index].textContent;
    }

    if (combination === `${player}${player}${player}`) {
      playerWin.style.display = "block";
      winner.innerHTML = player;
      gameField.forEach((singleField) => {
        singleField.style.pointerEvents = "none";
      });

      reset.style.display = "inline-block";
    }
  }
};

gameField.forEach((singleField) => {
  singleField.addEventListener("click", () => {
    player = counter % 2 ? "O" : "X";
    playerTurn = counter % 2 ? "X" : "O";
    turn.textContent = playerTurn;
    singleField.innerHTML = player;

    checkWin();
    turn.classList.toggle("playerTwo");
    singleField.style.color = "#00ffb3";
    winner.style.color = "#00ffb3";
    singleField.style.pointerEvents = "none";
    counter++;

    if (!turn.classList.contains("playerTwo")) {
      singleField.style.color = "#4882ff";
      winner.style.color = "#4882ff";
    }
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});
