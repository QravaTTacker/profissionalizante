const boxes = document.querySelectorAll("div.col");
const divGame = document.getElementById("game");
const reset = document.getElementById("reset");
const ninja = document.getElementById("ninja");
const elementResult = document.createElement("p");

const options = ["🍕", "🍔"];
const boxesAux = ["", "", "", "", "", "", "", "", ""];
const emojis = [
  "👾",
  "💀",
  "🌭",
  "🔥",
  "💩",
  "👀",
  "🦴",
  "🫵",
  "🗿",
  "🥚",
  "🍖",
  "🏴‍☠️",
  "🌚",
  "💯",
  "☢️",
];

let endGame = false;
let ninjaMode = false;
let vez = 0;

function resetAction() {
  boxes.forEach((element) => {
    element.innerText = "";
    element.classList.remove("win", "other");
  });
  boxesAux.forEach((e, i) => {
    boxesAux[i] = "";
  });
  vez = 0;
  endGame = false;
  const p = document.querySelector("p.result");
  if (p) p.innerText = "";
  console.clear();
}

reset.addEventListener("click", resetAction);

ninja.addEventListener("mouseover", () => {
  if (!ninjaMode) ninja.style.backgroundColor = "#a7595980";
});
ninja.addEventListener("mouseout", () => {
  if (!ninjaMode) ninja.style.backgroundColor = "#8b4b4b80";
});

ninja.addEventListener("click", () => {
  if (vez === 0) {
    if (!ninjaMode) {
      ninja.style.backgroundColor = "#ffd9d980";
      ninjaMode = true;
    } else {
      ninja.style.backgroundColor = "#8b4b4b80";
      ninjaMode = false;
    }
  }
});

function choice(element, index) {
  if (!element.innerText && !endGame && vez < 9) {
    if (ninjaMode) {
      element.innerText = emojis[parseInt(Math.random() * emojis.length)];
    } else {
      element.innerText = options[vez % 2];
    }
    boxesAux[index] = options[vez % 2];
    console.log(boxesAux);
    validar();
    vez++;
  }
}

document.addEventListener("keydown", ({ key }) => {
  if (key === " ") resetAction();

  key = parseInt(key);
  if (!isNaN(key) && key !== 0) choice(boxes[key - 1], key - 1);
});

boxes.forEach(function (element, index) {
  element.addEventListener("click", () => choice(element, index));
});

function end(msg) {
  if (localStorage.getItem("wins") === null) localStorage.setItem("wins", msg);
  boxes.forEach((box) => {
    if (!box.classList.contains("win")) box.classList.add("other");
  });
  elementResult.classList.add("result");
  elementResult.innerHTML = msg;
  divGame.prepend(elementResult);
  endGame = true;
}

function validar() {
  if (
    boxesAux[0] !== "" &&
    boxesAux[0] === boxesAux[1] &&
    boxesAux[0] === boxesAux[2]
  ) {
    boxes[0].classList.add("win");
    boxes[1].classList.add("win");
    boxes[2].classList.add("win");
    sas;
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[3] !== "" &&
    boxesAux[3] === boxesAux[4] &&
    boxesAux[3] === boxesAux[5]
  ) {
    boxes[3].classList.add("win");
    boxes[4].classList.add("win");
    boxes[5].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[6] !== "" &&
    boxesAux[6] === boxesAux[7] &&
    boxesAux[6] === boxesAux[8]
  ) {
    boxes[6].classList.add("win");
    boxes[7].classList.add("win");
    boxes[8].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[0] !== "" &&
    boxesAux[0] === boxesAux[3] &&
    boxesAux[0] === boxesAux[6]
  ) {
    boxes[0].classList.add("win");
    boxes[3].classList.add("win");
    boxes[6].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[1] !== "" &&
    boxesAux[1] === boxesAux[4] &&
    boxesAux[1] === boxesAux[7]
  ) {
    boxes[1].classList.add("win");
    boxes[4].classList.add("win");
    boxes[7].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[2] !== "" &&
    boxesAux[2] === boxesAux[5] &&
    boxesAux[2] === boxesAux[8]
  ) {
    boxes[2].classList.add("win");
    boxes[5].classList.add("win");
    boxes[8].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[0] !== "" &&
    boxesAux[0] === boxesAux[4] &&
    boxesAux[0] === boxesAux[8]
  ) {
    boxes[0].classList.add("win");
    boxes[4].classList.add("win");
    boxes[8].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (
    boxesAux[2] !== "" &&
    boxesAux[2] === boxesAux[4] &&
    boxesAux[2] === boxesAux[6]
  ) {
    boxes[2].classList.add("win");
    boxes[4].classList.add("win");
    boxes[6].classList.add("win");
    end(`<span>${options[vez % 2]}</span> Ganhou`);
  } else if (vez === 8) end("Empate <span>💀</span>");
}
