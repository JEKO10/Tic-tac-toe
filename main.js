const turn = document.querySelector("#turn");
const gameField = document.querySelectorAll(".gameField");

gameField.forEach((singleField) => {
  singleField.addEventListener("click", () => {
    turn.classList.toggle("playerTwo");
    turn.textContent = "O";

    if (!turn.classList.contains("playerTwo")) {
      turn.textContent = "X";
    }
  });
});
