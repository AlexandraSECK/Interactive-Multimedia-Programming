var mouseX, mouseY;

window.addEventListener("load", resizeCanvas);
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);

/*To have a responsive canvas*/

function resizeCanvas() {
  var canvas = document.getElementById("drawCanvas");
  var body=document.getElementById("body");
  var nav=document.getElementById("myTopnav");
  var height=window.innerHeight-(window.innerHeight*0.1);
  var width=body.clientWidth;
  canvas.width = width/1.5;
  canvas.height = height/1.3;
}

function canvasClicked(event) {
  console.log(event);
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");
  mouseX = event.offsetX;
  mouseY = event.offsetY;
}

function canvasReleased(event) {
  console.log(event);
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");
  context.linewidth = 4;
  context.strokeStyle = "rgb(200,0,0)";
  context.moveTo(mouseX, mouseY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
}
