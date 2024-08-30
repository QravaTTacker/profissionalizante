const buttons = document.querySelectorAll(".col");
const reset = document.querySelector("#reset");
const ninja = document.querySelector("#ninja");

const aux = ["", "", "", "", "", "", "", "", ""];

const possibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let condition = true;
let ninjaMode = false;
let endGame = false;
let rounds = 1;

for (let i = 0; i <= 8; i++) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].innerText === "" && !endGame) {
      if (condition) {
        buttons[i].innerText = ninjaMode ? randomEmoji() : "🍕";
        aux[i] = "🍕";
      } else {
        buttons[i].innerText = ninjaMode ? randomEmoji() : "🍔";
        aux[i] = "🍔";
      }
      console.log(aux);
      checkWin();
      rounds++;
      condition = !condition;
      console.log(randomEmoji());
    }
  });
}

function checkWin() {
  possibilities.forEach((possibility) => {
    const [a, b, c] = possibility;
    if (aux[a] !== "" && aux[a] === aux[b] && aux[a] === aux[c]) {
      win();
      buttons[a].classList.add("win");
      buttons[b].classList.add("win");
      buttons[c].classList.add("win");
      endGame = true;
    }
  });
  if (rounds === 9 && !endGame) tied();
}

function win() {
  const result = getResultElement();
  result.innerHTML = `<span>${condition ? "🍕" : "🍔"}</span> Ganhou!`;
}

function tied() {
  const result = getResultElement();
  result.innerHTML = "Empate";
}

function getResultElement() {
  let result = document.querySelector("p#result");
  if (!result) {
    result = document.createElement("p");
    result.setAttribute("id", "result");
    result.classList.add("result");
    document.querySelector("div.game-div").prepend(result);
  }
  return result;
}

function randomEmoji() {
  let emojis = [
    "🍔",
    "🍕",
    "👾",
    "🥸",
    "💩",
    "🤡",
    "🤧",
    "👽",
    "💀",
    "🗿",
    "🌚",
    "❤️", //12 (index = 11)
  ];
  let indexEmoji = parseInt(Math.random() * emojis.length);
  return emojis[indexEmoji];
}

reset.addEventListener("click", () => {
  condition = true;
  endGame = false;
  rounds = 1;
  getResultElement().innerHTML = "";
  buttons.forEach((button) => {
    button.innerText = "";
    button.classList.remove("win");
  });
  for (let i = 0; i < aux.length; i++) aux[i] = "";
});

ninja.addEventListener("click", () => {
  if (rounds === 1) {
    ninjaMode = !ninjaMode;
    ninja.classList.toggle("ninja-mode");
  }
});

ninja.addEventListener("mouseenter", () => {
  ninja.style.backgroundColor = "#a7595980";
});

ninja.addEventListener("mouseleave", () => {
  ninja.style.backgroundColor = "#8b4b4b80";
});
