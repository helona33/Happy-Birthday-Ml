// Screen elements & buttons
const welcomeScreen = document.getElementById('welcomeScreen');
const mainScreen = document.getElementById('mainScreen');
const openBtn = document.getElementById('openBtn');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// Stars Canvas Background
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 70; // Adjust for starry density

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Star Logic
class Star {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Spread stars initially across screen
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 0.15 + 0.05;
        this.alpha = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.reset();
        }
        // Elegant fade-in/fade-out twinkling
        this.alpha += this.twinkleSpeed;
        if (this.alpha > 1 || this.alpha < 0.2) {
            this.twinkleSpeed = -this.twinkleSpeed;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(220, 220, 225, ${Math.abs(this.alpha)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Generate star instances
for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

// Canvas animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}
animate();

// Transition Event: Click "Open your surprise"
openBtn.addEventListener('click', () => {
    // Fade out first screen
    welcomeScreen.style.opacity = '0';
    
    // Temporarily accelerate stars for a magic transition effect
    stars.forEach(star => {
        star.speed *= 4;
    });

    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        welcomeScreen.classList.remove('active');
        
        // Prepare main page
        mainScreen.classList.remove('hidden');
        mainScreen.style.opacity = '0';
        
        // Force rendering reflow
        mainScreen.offsetHeight;
        
        // Fade in main page
        mainScreen.style.opacity = '1';
        
        // Return stars to calm, slow speed
        stars.forEach(star => {
            star.speed /= 4;
        });
    }, 1000);
});

// Music playback toggle
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            musicBtn.innerHTML = "⏸ Stop Music";
        }).catch(err => {
            console.log("Audio play blocked or file not found in assets/audio/ yet: ", err);
        });
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }
});
