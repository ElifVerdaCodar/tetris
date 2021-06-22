document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");

  gridCiz(ctx);

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
