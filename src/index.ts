document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");

  gridCiz(ctx);
  blockCiz(ctx, 7, 9, [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ]);
  blockCiz(ctx, 1, 4, [
    [1, 1, 1],
    [1, 0, 0],
    [0, 0, 0],
  ]);
  blockCiz(ctx, 9, 15, [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  blockCiz(ctx, 13, 19, [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 0],
  ]);
  blockCiz(ctx, 20, 17, [
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 1],
  ]);

  //pozisyon
  var pozisyon = document.getElementById("position") as HTMLDivElement;
  canvas.addEventListener("mousemove", function (event) {
    pozisyon.innerText = event.clientX + "," + event.clientY;
  });
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

function kareCiz(ctx: CanvasRenderingContext2D, x: number, y: number) {
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
        kareCiz(ctx, i + x, j + y);
      }
    }
  }
}
