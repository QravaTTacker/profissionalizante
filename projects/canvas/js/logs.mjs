export function displayXY(panel, block) {
  const x = block.position.x > 0 ? block.position.x : 0;
  const y = block.position.y > 0 ? block.position.y : 0;
  panel.innerHTML = `X: ${x}<br> Y: ${y}`;
}
