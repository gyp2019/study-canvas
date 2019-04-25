const canvas = <HTMLCanvasElement>document.getElementById("webgame");
const context = canvas.getContext("2d");

context.fillStyle = "red";
context.strokeStyle = "blue";

context.fillRect(10, 10, 100, 100);
context.strokeRect(110, 110, 100, 100);
