export class Block {
  #vel = {
    value: 5,
    left: 0,
    right: 0,
    up: 0,
    down: 0,
  };

  #lastIndexX = 0;
  #lastIndexY = 0;
  #coordX = [0, 0];
  #coordY = [0, 0];

  constructor(canvas, ctx, props) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.size = props?.size ?? 50;
    this.color = props?.color ?? "purple";
    this.position = props?.position ?? {
      x: canvas.width / 2 - this.size / 2,
      y: canvas.height / 2 - this.size / 2,
    };
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  move() {
    document.addEventListener("keydown", (e) => {
      let key = e.key.toLowerCase();
      if (key === "w") {
        if (this.#coordY.indexOf(-this.#vel.value) < 0) {
          if (this.#coordY[0] === 0) {
            this.#coordY[0] = -this.#vel.value;
            this.#lastIndexY = 0;
          } else {
            this.#coordY[1] = -this.#vel.value;
            this.#lastIndexY = 1;
          }
        }
      }
      if (key === "s") {
        if (this.#coordY.indexOf(this.#vel.value) < 0) {
          if (this.#coordY[0] === 0) {
            this.#coordY[0] = this.#vel.value;
            this.#lastIndexY = 0;
          } else {
            this.#coordY[1] = this.#vel.value;
            this.#lastIndexY = 1;
          }
        }
      }
      if (key === "a") {
        if (this.#coordX.indexOf(-this.#vel.value) < 0) {
          if (this.#coordX[0] === 0) {
            this.#coordX[0] = -this.#vel.value;
            this.#lastIndexX = 0;
          } else {
            this.#coordX[1] = -this.#vel.value;
            this.#lastIndexX = 1;
          }
        }
      }
      if (key === "d") {
        if (this.#coordX.indexOf(this.#vel.value) < 0) {
          if (this.#coordX[0] === 0) {
            this.#coordX[0] = this.#vel.value;
            this.#lastIndexX = 0;
          } else {
            this.#coordX[1] = this.#vel.value;
            this.#lastIndexX = 1;
          }
        }
      }
    });

    document.addEventListener("keyup", (e) => {
      let key = e.key.toLowerCase();
      if (key === "w") {
        let index = this.#coordY.indexOf(-this.#vel.value);
        if (index >= 0) {
          this.#coordY[index] = 0;
          this.#lastIndexY = index === 0 ? 1 : 0;
        }
      }
      if (key === "s") {
        let index = this.#coordY.indexOf(this.#vel.value);
        if (index >= 0) {
          this.#coordY[index] = 0;
          this.#lastIndexY = index === 0 ? 1 : 0;
        }
      }
      if (key === "a") {
        let index = this.#coordX.indexOf(-this.#vel.value);
        if (index >= 0) {
          this.#coordX[index] = 0;
          this.#lastIndexX = index === 0 ? 1 : 0;
        }
      }
      if (key === "d") {
        let index = this.#coordX.indexOf(this.#vel.value);
        if (index >= 0) {
          this.#coordX[index] = 0;
          this.#lastIndexX = index === 0 ? 1 : 0;
        }
      }
    });

    let collision = false;

    if (this.#coordX[this.#lastIndexX] > 0) {
      collision = this.position.x >= this.canvas.width - this.size;
    } else {
      collision = this.position.x <= 0;
    }

    if (!collision) this.position.x += this.#coordX[this.#lastIndexX];

    if (this.#coordY[this.#lastIndexY] > 0) {
      collision = this.position.y >= this.canvas.height - this.size;
    } else {
      collision = this.position.y <= 0;
    }

    if (!collision) this.position.y += this.#coordY[this.#lastIndexY];
  }

  display() {
    this.draw();
    this.move();
  }
}
