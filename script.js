let player1, player2;
let messDiv = document.querySelector(".message");
let turnX = true;

document.getElementById("submit").addEventListener("click", function () {
  player1 = document.getElementById("player1").value.trim();
  player2 = document.getElementById("player2").value.trim();

  if (player1 && player2) {
    document.querySelector(".input-section").style.display = "none";
    document.querySelector(".board").style.display = "block";
    messDiv.innerText = `${player1}, you're up`;
  }
});

document.querySelector(".exit").addEventListener("click", function () {
  document.querySelector(".input-section").style.display = "block";
  document.querySelector(".board").style.display = "none";
  messDiv.innerText = "";
  document.querySelectorAll(".cell").forEach((item) => {
    item.innerText = "";
    item.disabled = false;
  });
  turnX = true;
  messDiv.innerText = `${player1}, you're up`;
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelectorAll(".cell").forEach((item) => {
    item.innerText = "";
    item.disabled = false;
  });
  turnX = true;
  messDiv.innerText = `${player1}, you're up`;
});

let boxes = document.querySelectorAll(".cell");

boxes.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerText !== "") return;

    if (turnX) {
      item.innerText = "x";
      messDiv.innerText = `${player2}, you're up`;
    } else {
      item.innerText = "o";
      messDiv.innerText = `${player1}, you're up`;
    }

    turnX = !turnX;
    checkWinner();
  });
});

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let pattern of winPattern) {
    const [a, b, c] = pattern;
    let pos1Val = boxes[a].innerText;
    let pos2Val = boxes[b].innerText;
    let pos3Val = boxes[c].innerText;

    if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
      const winner = pos1Val === "x" ? player1 : player2;
      messDiv.innerText = `${winner} congratulations you won!`;
		messDiv.style.fontSize = "45px"; 
       messDiv.style.color = "#04AA6D";
		 boxes[a].style.backgroundColor = "#90EE90"; // light green
      boxes[b].style.backgroundColor = "#90EE90";
      boxes[c].style.backgroundColor = "#90EE90";

      boxes.forEach((box) => (box.disabled = true));
      return;
    }
  }

  const allFilled = [...boxes].every((box) => box.innerText !== "");
  if (allFilled) messDiv.innerText = "It's a draw!";
}
