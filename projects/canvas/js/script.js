import { Block } from "./block.mjs";
import { displayXY } from "./logs.mjs";

const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const block = new Block(canvas, ctx);

function main() {
  window.requestAnimationFrame(main);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  block.display();
  displayXY(document.querySelector("#headerLogs"), block);
}

main();
