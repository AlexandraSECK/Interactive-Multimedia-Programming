var Timer = 0,
Count = 0;
var click = 0;
var canvas = document.getElementById("drawCanvas");
var context = canvas.getContext("2d");
var dispscore = document.getElementById("score");
var score = 0;
var x, y, size = 50;
var t = 10;


window.addEventListener("load", resizeCanvas);
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);

function resizeCanvas() {
  var canvas = document.getElementById("drawCanvas");
  var body = document.getElementById("body");
  var nav = document.getElementById("myTopnav");
  var height = window.innerHeight - (window.innerHeight * 0.1);
  var width = body.clientWidth;
  canvas.width = width / 1.5;
  canvas.height = height / 1.3;
}


function time() {
  t--;
  document.getElementById("time").innerHTML = "Timer:" + t;

}


function game(event) {
  if (click == 0) {
    click = 1;
    console.log(event);
    context.beginPath();
    x = getRandomNumber(canvas.width - 50);
    y = getRandomNumber(canvas.height - 50);
    context.rect(x, y, size, size);
    context.stroke();
    context.closePath();
    Count = setInterval(time, 1000);
    Timer = setTimeout("endgame()", 10000);
    dispscore.innerHTML = "SCORE: " + score;
  } else {
    if (event.offsetX >= x && event.offsetX <= x + size && event.offsetY >= y && event.offsetY <= y + size) {
      score++;
      dispscore.innerHTML = "SCORE: " + score;;
      console.log(event);
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.beginPath();
      x = getRandomNumber(canvas.width - 50);
      y = getRandomNumber(canvas.height - 50);
      context.rect(x, y, size, size);
      context.stroke();
      context.closePath();
    } else {}
  }
}

function endgame() {

  click = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("time").innerHTML = "GAME OVER";
  clearInterval(Count);
  t = 10;
  score = 0;

}


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}