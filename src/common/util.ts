/**
* @param fillHeight : 반딧불이 채울 높이 0 ~ 1
*/
export function setFirefly(fillHeight: number /* 0 ~ 1 */) {
  const c = init("canvas");
  let w = c.canvas.width = window.innerWidth;
  let h = c.canvas.height = window.innerHeight * fillHeight; // initiation

  class Firefly {
    x: number;
    y: number;
    s: number;
    ang: number;
    v: number;

    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.s = Math.random() * 2;
      this.ang = Math.random() * 2 * Math.PI;
      this.v = this.s * this.s / 4;
    }

    move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
    }

    show() {
      c.beginPath();
      c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      c.fillStyle = "#fddba3";
      c.fill();
    }
  }

  const fly: Firefly[] = [];

  function draw() {
    if (fly.length < 100) {
      for (let j = 0; j < 10; j++) {
        fly.push(new Firefly());
      }
    }

    for (let i = 0; i < fly.length; i++) {
      fly[i].move();
      fly[i].show();

      if (fly[i].x < 0 || fly[i].x > w || fly[i].y < 0 || fly[i].y > h) {
        fly.splice(i, 1);
      }
    }
  }

  interface Mouse {
      x?: number;
      y?: number;
  }

  const mouse: Mouse = {};
  const last_mouse: Mouse = {};

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  canvas.addEventListener("mousemove", function (e: MouseEvent) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  }, false);

  function init(elemid: string) {
    const canvas = document.getElementById(elemid) as HTMLCanvasElement;
    const c = canvas.getContext("2d") as CanvasRenderingContext2D;
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight * fillHeight;
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return c;
  }

  (window as any).requestAnimFrame = function () {
    return window.requestAnimationFrame ||
      (window as any).webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame ||
      (window as any).oRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      function (callback: FrameRequestCallback) {
        window.setTimeout(callback, 1000 / 60);
      };
  };

  function loop() {
    (window as any).requestAnimFrame(loop);
    c.clearRect(0, 0, w, h);
    draw();
  }

  window.addEventListener("resize", function () {
    w = c.canvas.width = window.innerWidth;
    h = c.canvas.height = window.innerHeight * fillHeight;
    loop();
  });

  loop();
  setInterval(loop, 1000 / 60);
}