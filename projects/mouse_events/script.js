// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll(".box");
const button = document.querySelector("button");

let box1 = boxes[0];
let box2 = boxes[1];
let box3 = boxes[2];
let box4 = boxes[3];

let vezes = 0;

/**
 * click 	      A user clicks on an element
 * contextmenu 	A user right-clicks on an element
 * dblclick 	  A user double-clicks on an element
 *
 * mousedown 	  A mouse button is pressed over an element
 * mouseup      A mouse button is released over an element
 *
 * mouseenter 	The mouse pointer moves into an element
 * mouseout 	  The mouse pointer moves out of an element (mouseleave)
 *
 * mousemove 	  The mouse pointer moves over an element (mouseover)
 */
box1.addEventListener("click", () => {
  box1.innerText = "Click";
});

box1.addEventListener("dblclick", () => {
  box1.innerText = "Double Click";
});

box1.addEventListener("contextmenu", () => {
  box1.innerText = "Context Menu";
});

box2.addEventListener("mousedown", () => {
  box2.innerText = "Down";
});

box2.addEventListener("mouseup", () => {
  box2.innerText = "Up";
});

box3.addEventListener("mouseenter", () => {
  box3.innerText = "Enter";
});

box3.addEventListener("mouseout", () => {
  box3.innerText = "Out";
});

box4.addEventListener("mousemove", (e) => {
  box4.innerText = `Move ${vezes++}x`;
});

button.onclick = () => {
  boxes.forEach((e) => (e.innerText = ""));
  vezes = 0;
};

document.body.oncontextmenu = () => false;
