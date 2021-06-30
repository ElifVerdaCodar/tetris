import {
  matrixSaatYonundeCevir,
  matrixSaatYonuneTersCevir,
  noktaDikdortgeninIcinde,
} from "./hesaplamalar";

var aktifBlokX = 12;
var aktifBlokY = 3;
var aktifBlokIndex = 1;
var blokBoyut = 20;
var oyunGenislik = 500;
var oyunYukseklik = 700;
var yatayKareSayisi = oyunGenislik / blokBoyut;
var dikeyKareSayisi = oyunYukseklik / blokBoyut;
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
var cizilecekBlok = bloklar[aktifBlokIndex];

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas") as HTMLCanvasElement;
  var ctx = canvas.getContext("2d");

  blockCiz(ctx, aktifBlokX, aktifBlokY, cizilecekBlok);
  gridCiz(ctx);

  //pozisyon
  var pozisyon = document.getElementById("position") as HTMLDivElement;
  canvas.addEventListener("mousemove", function (event) {
    pozisyon.innerText = event.clientX + "," + event.clientY;
  });

  document.addEventListener("keydown", function (event) {
    var oncekiAktifBlokX = aktifBlokX;
    var oncekiAktifBlokY = aktifBlokY;
    if (event.key == "ArrowLeft") {
      aktifBlokX = aktifBlokX - 1;
    } else if (event.key == "ArrowRight") {
      aktifBlokX = aktifBlokX + 1;
    } else if (event.key == "ArrowDown") {
      aktifBlokY = aktifBlokY + 1;
    } else if (event.key == "ArrowUp") {
      // aktifBlokY = aktifBlokY - 1;
      cizilecekBlok = matrixSaatYonuneTersCevir(cizilecekBlok);
    } else {
      return;
    }
    if (cizilecekBlokOyunAlaniIcinde()) {
      ctx.clearRect(0, 0, oyunGenislik, oyunYukseklik);
      blockCiz(ctx, aktifBlokX, aktifBlokY, cizilecekBlok);
      gridCiz(ctx);
    } else {
      aktifBlokX = oncekiAktifBlokX;
      aktifBlokY = oncekiAktifBlokY;
    }
  });
});

function gridCiz(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();

  ctx.strokeStyle = "lightgrey";
  //35e kadar 20şer arttırarak dön. Böylece 700 pixellik alanda çiz
  for (var i = 0; i < dikeyKareSayisi; i += 1) {
    ctx.moveTo(0, i * blokBoyut);
    ctx.lineTo(oyunGenislik, i * blokBoyut);
  }
  //dikey çizgiler
  for (var j = 0; j < yatayKareSayisi; j++) {
    ctx.moveTo(blokBoyut * j, 0);
    ctx.lineTo(blokBoyut * j, oyunYukseklik);
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
  sol: number,
  ust: number,
  blokNoktalar: Array<Array<number>>
) {
  for (var y = 0; y < blokNoktalar.length; y++) {
    for (var x = 0; x < blokNoktalar[y].length; x++) {
      if (blokNoktalar[y][x] == 1) {
        kareCiz(ctx, sol + x, ust + y, "black");
      }
      //  else {
      //   kareCiz(ctx, left + x, top + y, "yellow");
      // }
    }
  }
}

function cizilecekBlokOyunAlaniIcinde() {
  for (var y = 0; y < cizilecekBlok.length; y++) {
    var cizgi = cizilecekBlok[y];
    for (var x = 0; x < cizgi.length; x++) {
      if (
        cizgi[x] == 1 &&
        noktaDikdortgeninIcinde(
          x + aktifBlokX,
          y + aktifBlokY,
          0,
          0,
          yatayKareSayisi - 1,
          dikeyKareSayisi - 1
        ) == false
      ) {
        return false;
      }
    }
  }

  return true;
}
