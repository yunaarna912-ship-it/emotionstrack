const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const numFlakes = 80;
const flakes = [];

for (let i = 0; i < numFlakes; i++) {
    flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.8 + 0.2
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';

    flakes.forEach(flake => {
        ctx.beginPath();
        ctx.globalAlpha = flake.opacity;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > height) {
            flake.y = -5;
            flake.x = Math.random() * width;
        }
    });

    requestAnimationFrame(drawSnow);
}

drawSnow();

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
