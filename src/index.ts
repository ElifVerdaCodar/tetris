document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");
  ctx.beginPath();

  //35e kadar 20şer arttırarak dön. Böylece 700 pixellik alanda çiz
  for (var i = 0; i < 35; i += 1) {
    console.log(i);
    ctx.moveTo(0, i * 20);
    ctx.lineTo(500, i * 20);
  }
  ctx.stroke();

  //pozisyon
  var pozisyon = document.getElementById("position") as HTMLDivElement;
  canvas.addEventListener("mousemove", function (event) {
    pozisyon.innerText = event.clientX + "," + event.clientY;
  });
});
