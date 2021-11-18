const turn = document.querySelector("#turn");
const gameField = document.querySelectorAll(".gameField");

gameField.forEach((singleField) => {
  singleField.addEventListener("click", () => {
    turn.classList.toggle("playerTwo");
    turn.textContent = "X";
    singleField.innerHTML = "O";
    singleField.style.color = "#00ffb3";

    if (!turn.classList.contains("playerTwo")) {
      turn.textContent = "O";
      singleField.innerHTML = "X";
      singleField.style.color = "#4882ff";
    }
  });
});
