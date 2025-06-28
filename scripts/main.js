const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#cce7ff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "#ff99aa";
ctx.fill();
ctx.closePath();

