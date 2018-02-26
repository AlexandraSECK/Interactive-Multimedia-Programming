var mouseX, mouseY, tx, ty, click = false;
var canvas = document.getElementById("drawCanvas");
var context = canvas.getContext("2d");
var temp = context.getImageData(0, 0, canvas.width, canvas.height);
context.strokeStyle = "rgb(200,0,0)";

window.addEventListener("load", resizeCanvas);
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);

/*Responsive*/
function resizeCanvas() {
	var canvas = document.getElementById("drawCanvas");
	var body = document.getElementById("body");
	var nav = document.getElementById("myTopnav");
	var height = window.innerHeight - (window.innerHeight * 0.1);
	var width = body.clientWidth;
	canvas.width = width / 1.5;
	canvas.height = height / 1.3;
}

function canvasClicked(event) {
	click = true;
	console.log(event);
	mouseX = event.offsetX;
	mouseY = event.offsetY;

}

function canvasMoved(event) {
	if (click) {
		console.log(event);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.putImageData(temp, 0, 0);
		context.beginPath();
		context.moveTo(mouseX, mouseY);
		tx = event.offsetX;
		ty = event.offsetY;
		context.lineTo(event.offsetX, event.offsetY);
		context.stroke();
		context.closePath();
	}
}

function canvasUp(event) {
	click = false;
	console.log(event);
	context.moveTo(mouseX, mouseY);
	context.lineTo(tx, ty);
	context.stroke;
	temp = context.getImageData(0, 0, canvas.width, canvas.height);
}