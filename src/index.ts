import { matrixSaatYonundeCevir } from "./hesaplamalar";

var aktifBlokX = 12;
var aktifBlokY = 3;
var bloklar = [
  [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
];

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");

  gridCiz(ctx);

  //pozisyon
  var pozisyon = document.getElementById("position") as HTMLDivElement;
  canvas.addEventListener("mousemove", function (event) {
    pozisyon.innerText = event.clientX + "," + event.clientY;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
      aktifBlokX = aktifBlokX - 1;
    } else if (event.key == "ArrowRight") {
      aktifBlokX = aktifBlokX + 1;
    } else if (event.key == "ArrowDown") {
      aktifBlokY = aktifBlokY + 1;
    } else {
      return;
    }
    ctx.clearRect(0, 0, 500, 700);
    blockCiz(ctx, aktifBlokX, aktifBlokY, bloklar[1]);
    gridCiz(ctx);
  });

  blockCiz(ctx, aktifBlokX, aktifBlokY, bloklar[1]);
});

function gridCiz(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();

  //35e kadar 20şer arttırarak dön. Böylece 700 pixellik alanda çiz
  for (var i = 0; i < 35; i += 1) {
    ctx.moveTo(0, i * 20);
    ctx.lineTo(500, i * 20);
  }
  //dikey çizgiler
  for (var j = 0; j < 25; j++) {
    ctx.moveTo(20 * j, 0);
    ctx.lineTo(20 * j, 700);
  }

  ctx.stroke();
}

function kareCiz(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  renk: string
) {
  ctx.fillStyle = renk;
  ctx.fillRect(x * 20, y * 20, 20, 20);
}

function blockCiz(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  blokNoktalar: Array<Array<number>>
) {
  for (var i = 0; i < blokNoktalar.length; i++) {
    for (var j = 0; j < blokNoktalar[i].length; j++) {
      if (blokNoktalar[i][j] == 1) {
        kareCiz(ctx, i + x, j + y, "black");
      } else {
        kareCiz(ctx, i + x, j + y, "yellow");
      }
    }
  }
}
