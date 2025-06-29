const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 500;
canvas.height = 300;

// Draw background
ctx.fillStyle = '#b2ebf2';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw welcome message
ctx.fillStyle = '#006064';
ctx.font = '24px sans-serif';
ctx.fillText('Welcome to Coastal Curator!', 50, 150);
