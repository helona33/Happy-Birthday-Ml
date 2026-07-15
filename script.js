// Screen Flow Elements
const welcomeScreen = document.getElementById('step-welcome');
const nameScreen = document.getElementById('step-namecheck');
const surpriseScreen = document.getElementById('step-surprise');
const mainScroller = document.getElementById('step-main-scroller');
const giftScreen = document.getElementById('step-gift');
const endingScreen = document.getElementById('step-ending');

// Interactive Element Selectors
const btnBegin = document.getElementById('btn-begin');
const nameInput = document.getElementById('name-input');
const btnSubmitName = document.getElementById('btn-submit-name');
const nameError = document.getElementById('name-error');
const btnToGarden = document.getElementById('btn-to-garden');
const btnToGift = document.getElementById('btn-to-gift');
const btnToEnding = document.getElementById('btn-to-ending');

// Audio Controllers
const bgMusic = document.getElementById('bgMusic');
const vinylRecord = document.getElementById('vinyl-record');
const btnMusicToggle = document.getElementById('btn-music-toggle');

// Canvas Setup
const canvas = document.getElementById('effectsCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
let fireflies = [];
let particles = [];
let cursorSparkles = [];
const numStars = 60;
const numFireflies = 15;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/* --- INTERACTIVE CANVAS OBJECTS --- */

// Background slow-moving stars
class Star {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 0.12 + 0.03;
        this.alpha = Math.random();
        this.twinkleSpeed = Math.random() * 0.015 + 0.005;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
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

// Gentle fireflies wandering the screen
class Firefly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random();
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Loop boundary coordinates
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.alpha += this.fadeSpeed;
        if (this.alpha > 0.8 || this.alpha < 0.1) {
            this.fadeSpeed = -this.fadeSpeed;
        }
    }
    draw() {
        ctx.fillStyle = `rgba(212, 239, 188, ${Math.abs(this.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#d4efbc';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
    }
}

// Generic particle system (Handles popping Hearts & Falling Petals)
class Particle {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 'heart', 'petal', 'sparkle'
        this.size = type === 'heart' ? Math.random() * 12 + 8 : (type === 'petal' ? Math.random() * 10 + 6 : Math.random() * 3 + 1);
        this.vx = (Math.random() - 0.5) * (type === 'heart' ? 6 : 2);
        this.vy = type === 'heart' ? (Math.random() - 1) * 6 : Math.random() * 1.5 + 0.5;
        this.alpha = 1;
        this.life = 1;
        this.decay = Math.random() * 0.015 + 0.005;
        this.angle = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.rotSpeed;
        this.life -= this.decay;
        this.alpha = Math.max(0, this.life);
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.alpha;

        if (this.type === 'heart') {
            ctx.fillStyle = '#ff3e60';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-this.size/2, -this.size/2, -this.size, 0, 0, this.size);
            ctx.bezierCurveTo(this.size, 0, this.size/2, -this.size/2, 0, 0);
            ctx.fill();
        } else if (this.type === 'petal') {
            ctx.fillStyle = '#ffb3c1';
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size/2, this.size, 0, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'sparkle') {
            ctx.fillStyle = '#ffeb3b';
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

// Initializing objects
for (let i = 0; i < numStars; i++) stars.push(new Star());
for (let i = 0; i < numFireflies; i++) fireflies.push(new Firefly());

// Dynamic Mouse Interactions tracking
let lastMousePos = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
    lastMousePos.x = e.clientX;
    lastMousePos.y = e.clientY;
    
    // Create cursor sparkles trailing behind
    if (Math.random() < 0.25) {
        cursorSparkles.push(new Particle(e.clientX, e.clientY, 'sparkle'));
    }
    // Create soft rose petals trailing on motion
    if (Math.random() < 0.15) {
        cursorSparkles.push(new Particle(e.clientX, e.clientY, 'petal'));
    }
});

// Mobile Touch support sparkles
window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    lastMousePos.x = touch.clientX;
    lastMousePos.y = touch.clientY;
    if (Math.random() < 0.25) {
        cursorSparkles.push(new Particle(touch.clientX, touch.clientY, 'sparkle'));
    }
});

// Click anywhere to burst hearts
window.addEventListener('click', (e) => {
    // Avoid triggering if clicking on layout buttons or overlays
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && !e.target.closest('.letter-paper') && !e.target.closest('.glass-message')) {
        for (let i = 0; i < 8; i++) {
            particles.push(new Particle(e.clientX, e.clientY, 'heart'));
        }
    }
});

// Primary Render Engine loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => { star.update(); star.draw(); });
    fireflies.forEach(firefly => { firefly.update(); firefly.draw(); });
    
    // Update active particle systems
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => { p.update(); p.draw(); });

    cursorSparkles = cursorSparkles.filter(s => s.life > 0);
    cursorSparkles.forEach(s => { s.update(); s.draw(); });

    requestAnimationFrame(animate);
}
animate();


/* --- STAGE FLOW AND ROUTING SCRIPT --- */

function switchStep(current, next) {
    current.style.opacity = '0';
    setTimeout(() => {
        current.classList.add('hidden');
        current.classList.remove('active');
        
        next.classList.remove('hidden');
        // Trigger reflow force to activate transitions
        next.offsetHeight; 
        next.classList.add('active');
        next.style.opacity = '1';
        
        // Reset window frame scroll top if transition occurs
        if (next.classList.contains('scrollable-step')) {
            next.scrollTop = 0;
            checkScrollAppearance();
        }
    }, 1500);
}

// Step 1 Welcome Screen -> Step 2 Name Check
btnBegin.addEventListener('click', () => {
    switchStep(welcomeScreen, nameScreen);
});

// Step 2 Name Check validations
btnSubmitName.addEventListener('click', () => {
    const inputVal = nameInput.value.trim().toLowerCase();
    if (inputVal === 'kiya') {
        nameError.classList.add('hidden');
        switchStep(nameScreen, surpriseScreen);
    } else {
        nameError.classList.remove('hidden');
        nameError.style.animation = 'none';
        nameError.offsetHeight; // trigger reflow
        nameError.style.animation = 'fadeIn 0.5s ease';
    }
});

// Allow Enter key in name field
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnSubmitName.click();
    }
});

// Step 3 Surprise Screen -> Main Scroller Viewport
btnToGarden.addEventListener('click', () => {
    switchStep(surpriseScreen, mainScroller);
    // Play back song instantly when heading into scroll sections
    tryPlayingMusic();
});

// Step 4 Scroller -> Final Gift Stage
btnToGift.addEventListener('click', () => {
    switchStep(mainScroller, giftScreen);
});


/* --- MAIN INTERACTIVE SECTIONS & CONTROLS --- */

// Audio Controller toggle & spinning animation
btnMusicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            vinylRecord.classList.add('playing');
            btnMusicToggle.innerHTML = "⏸ Stop music";
        }).catch(err => {
            console.log("Audio block details: ", err);
        });
    } else {
        bgMusic.pause();
        vinylRecord.classList.remove('playing');
        btnMusicToggle.innerHTML = "▶ Play music";
    }
});

function tryPlayingMusic() {
    bgMusic.play().then(() => {
        vinylRecord.classList.add('playing');
        btnMusicToggle.innerHTML = "⏸ Stop music";
    }).catch(err => {
        console.log("Interactive playback requires user engagement first.", err);
    });
}

// 4A. Scrolling Bloom Animations observer
const sections = document.querySelectorAll('.journey-section');
mainScroller.addEventListener('scroll', checkScrollAppearance);

function checkScrollAppearance() {
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            sec.classList.add('appeared');
            
            // Bloom flowers inside current activated block
            if (sec.id === 'section-garden') {
                const flowers = sec.querySelectorAll('.flower-container');
                flowers.forEach((flower, index) => {
                    setTimeout(() => {
                        flower.classList.add('bloomed');
                    }, index * 400);
                });
            }
        }
    });
}

// Flower Click message triggers
const flowers = document.querySelectorAll('.flower-container');
const flowerBox = document.getElementById('flower-message-box');
const flowerTxt = document.getElementById('flower-message-text');
const closeMsgBtn = document.querySelector('.close-msg');

flowers.forEach(flower => {
    flower.addEventListener('click', (e) => {
        if (flower.classList.contains('bloomed')) {
            const msg = flower.getAttribute('data-message');
            flowerTxt.innerText = msg;
            flowerBox.classList.remove('hidden');
            
            // Spawn mini hearts directly over tapped bloom
            const rect = flower.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                particles.push(new Particle(rect.left + rect.width/2, rect.top + rect.height/3, 'heart'));
            }
        }
    });
});

closeMsgBtn.addEventListener('click', () => {
    flowerBox.classList.add('hidden');
});

// 4B. Interactive Candle blowing system
const candles = document.querySelectorAll('.candle');
const wishPrompt = document.getElementById('cake-wish-prompt');

candles.forEach(candle => {
    candle.addEventListener('click', () => {
        if (!candle.classList.contains('blown-out')) {
            candle.classList.add('blown-out');
            
            // Sparkle burst effects upon blowing out candles
            const rect = candle.getBoundingClientRect();
            for (let i = 0; i < 15; i++) {
                cursorSparkles.push(new Particle(rect.left + rect.width/2, rect.top, 'sparkle'));
            }
            
            // Check if all flames are blown out
            const blownOutCount = document.querySelectorAll('.candle.blown-out').length;
            if (blownOutCount === candles.length) {
                wishPrompt.classList.remove('hidden');
            }
        }
    });
});

// 4C. Unfolding Sealed Envelope logic
const envelopeBtn = document.getElementById('envelope-btn');
const letterPaper = document.getElementById('letter-paper');
const closeLetterBtn = document.getElementById('close-letter-btn');

envelopeBtn.addEventListener('click', () => {
    letterPaper.classList.remove('hidden');
    // Frame reflow trigger
    letterPaper.offsetHeight;
    letterPaper.classList.add('open');
});

closeLetterBtn.addEventListener('click', () => {
    letterPaper.classList.remove('open');
    setTimeout(() => {
        letterPaper.classList.add('hidden');
    }, 600);
});

// 4D. Interactive Memory Sky system
const skyStars = document.querySelectorAll('.sky-star');
const skyBox = document.getElementById('sky-message-box');
const skyTxt = document.getElementById('sky-message-text');
const closeSkyMsgBtn = document.querySelector('.close-msg-sky');

skyStars.forEach(star => {
    star.addEventListener('click', (e) => {
        const thought = star.getAttribute('data-thought');
        skyTxt.innerText = thought;
        skyBox.classList.remove('hidden');
        
        // Spawn small stars around active element
        const rect = star.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
            cursorSparkles.push(new Particle(rect.left + rect.width/2, rect.top + rect.height/2, 'sparkle'));
        }
    });
});

closeSkyMsgBtn.addEventListener('click', () => {
    skyBox.classList.add('hidden');
});

// 4E. Interactive Heartbeat Hug utility
const btnSendHug = document.getElementById('btn-send-hug');
btnSendHug.addEventListener('click', () => {
    document.body.classList.add('heartbeat-active');
    
    // Spawn screen full of bursts
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    for (let i = 0; i < 30; i++) {
        particles.push(new Particle(middleX + (Math.random() - 0.5) * 100, middleY + (Math.random() - 0.5) * 100, 'heart'));
    }

    setTimeout(() => {
        document.body.classList.remove('heartbeat-active');
    }, 800);
});


/* --- STEP 5: FINAL BOX POP SEQUENCE --- */

const giftBoxBtn = document.getElementById('gift-box-btn');
const giftPrompt = document.getElementById('gift-prompt');
const loveMessages = document.getElementById('love-messages');
const words = [
    document.getElementById('word-choose'),
    document.getElementById('word-again'),
    document.getElementById('word-tomorrow'),
    document.getElementById('word-always')
];

giftBoxBtn.addEventListener('click', () => {
    if (!giftBoxBtn.classList.contains('opened')) {
        giftBoxBtn.classList.add('opened');
        giftPrompt.style.opacity = '0';
        
        // Burst massive hundreds of floating hearts on release!
        const boxRect = giftBoxBtn.getBoundingClientRect();
        const startX = boxRect.left + boxRect.width / 2;
        const startY = boxRect.top;
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                particles.push(new Particle(startX, startY, 'heart'));
            }, i * 15);
        }

        // Slowly run sequential fade words step sequence
        setTimeout(() => {
            giftBoxBtn.style.display = 'none';
            giftPrompt.style.display = 'none';
            loveMessages.classList.remove('hidden');
            
            // Fading sequential words timing loops
            words.forEach((word, index) => {
                setTimeout(() => {
                    word.classList.add('visible');
                    
                    // Spawn side sparkles as words show up
                    const wordRect = word.getBoundingClientRect();
                    for(let k = 0; k < 6; k++) {
                        cursorSparkles.push(new Particle(wordRect.left + (Math.random()*wordRect.width), wordRect.top, 'sparkle'));
                    }
                }, index * 1800);
            });

            // Reveal hidden routing button to slide into Ending Screen
            setTimeout(() => {
                btnToEnding.classList.remove('hidden');
                btnToEnding.style.opacity = '0';
                btnToEnding.offsetHeight;
                btnToEnding.style.opacity = '1';
                
                // Clicking anywhere on final words area pushes to transition
                btnToEnding.click();
            }, (words.length * 1800) + 1200);

        }, 1500);
    }
});

btnToEnding.addEventListener('click', () => {
    switchStep(giftScreen, endingScreen);
});
