const turn = document.querySelector("#turn");
const gameField = document.querySelectorAll(".gameField");
const reset = document.querySelector("button");
const playerWin = document.querySelector(".playerWin");
const winner = document.querySelector("#winner");
const draw = document.querySelector(".draw");
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
  let win = false;
  for (let combo of winningCombos) {
    let combination = "";
    for (let index of combo) {
      combination += gameField[index].textContent;
    }

    if (combination === `${player}${player}${player}`) {
      win = true;
    }
  }

  return win;
};

gameField.forEach((singleField) => {
  singleField.addEventListener("click", () => {
    player = counter % 2 ? "O" : "X";
    playerTurn = counter % 2 ? "X" : "O";
    turn.textContent = playerTurn;
    singleField.innerHTML = player;

    if (checkWin()) {
      playerWin.style.display = "block";
      winner.innerHTML = player;
      gameField.forEach((singleField) => {
        singleField.style.pointerEvents = "none";
      });
      reset.style.display = "inline-block";
    } else if (counter === 8) {
      draw.style.display = "block";
      winner.innerHTML = player;
      gameField.forEach((singleField) => {
        singleField.style.pointerEvents = "none";
      });
      reset.style.display = "inline-block";
    }

    counter++;
    turn.classList.toggle("playerTwo");
    singleField.style.color = "#00ffb3";
    winner.style.color = "#00ffb3";
    singleField.style.pointerEvents = "none";
    // console.log(counter);

    if (!turn.classList.contains("playerTwo")) {
      singleField.style.color = "#4882ff";
      winner.style.color = "#4882ff";
    }
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});
