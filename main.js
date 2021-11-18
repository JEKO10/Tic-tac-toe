const turn = document.querySelector("#turn");
const gameField = document.querySelectorAll(".gameField");
const reset = document.querySelector("button");
const playerWin = document.querySelector(".playerWin");

gameField.forEach((singleField) => {
  singleField.addEventListener("click", () => {
    turn.classList.toggle("playerTwo");
    turn.textContent = "X";
    singleField.innerHTML = "O";
    singleField.style.color = "#00ffb3";
    singleField.style.pointerEvents = "none";
    // playerWin.style.display = "block";

    if (!turn.classList.contains("playerTwo")) {
      turn.textContent = "O";
      singleField.innerHTML = "X";
      singleField.style.color = "#4882ff";
    }
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});
