const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw a test background
ctx.fillStyle = "#cce7ff"; // Light blue
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw a circle (like a placeholder character)
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "#ff99aa"; // Light pink
ctx.fill();
ctx.closePath();
