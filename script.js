/* Core Styling Rules & Color Palette */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #0b0b0f;
    color: #dfdfe6;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

/* Base Fonts & Typography */
.font-serif {
    font-family: 'Playfair Display', serif;
}

/* Canvas layered fully behind interactions */
#effectsCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

/* Journey Layout Container */
#journeyContainer {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
}

/* Screens Structure */
.journey-step {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1.5s ease;
}

.journey-step.active {
    opacity: 1;
    pointer-events: auto;
}

.journey-step.hidden {
    display: none !important;
}

/* Scrollable main view layout */
.scrollable-step {
    overflow-y: auto;
    display: block;
}

.scroller-inner {
    max-width: 650px;
    margin: 0 auto;
    padding: 100px 16px 120px 16px;
    display: flex;
    flex-direction: column;
    gap: 120px;
}

.journey-section {
    width: 100%;
    text-align: center;
    opacity: 0.2;
    transform: translateY(30px);
    transition: opacity 1.2s ease, transform 1.2s ease;
}

.journey-section.appeared {
    opacity: 1;
    transform: translateY(0);
}

.text-center {
    text-align: center;
}

/* Headings and fonts styling */
.section-title {
    font-size: 2.2rem;
    font-weight: 400;
    color: #f0f0f5;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.section-subtitle {
    font-size: 0.95rem;
    font-weight: 300;
    color: #9a9ab0;
    margin-bottom: 40px;
    letter-spacing: 1px;
}

/* Elegant glass buttons */
.elegant-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #f0f0f5;
    padding: 14px 30px;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.elegant-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* Glassmorphic cards */
.glass-message {
    background: rgba(20, 20, 25, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    margin: 24px auto 0 auto;
    max-width: 450px;
    position: relative;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: fadeIn 0.5s ease forwards;
}

.close-msg, .close-msg-sky {
    position: absolute;
    top: 8px;
    right: 14px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #9a9ab0;
    transition: color 0.3s;
}

.close-msg:hover, .close-msg-sky:hover {
    color: #ffffff;
}

/* Welcome Reveal screen objects */
.mini-moon {
    font-size: 4rem;
    margin-bottom: 24px;
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
}

.glow-text {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 40px;
    line-height: 1.5;
    color: #f0f0f5;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.35);
}

/* Name check stage */
.prompt-text {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 30px;
    color: #f0f0f5;
}

.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

#name-input {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 14px 24px;
    font-size: 1.1rem;
    color: #ffffff;
    border-radius: 50px;
    outline: none;
    text-align: center;
    width: 260px;
    transition: all 0.3s;
}

#name-input:focus {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.08);
}

.error-text {
    color: #ff5e7e;
    margin-top: 15px;
    font-size: 0.9rem;
}

/* Surprise Screen */
.surprise-title {
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
    text-shadow: 0 0 20px rgba(255, 94, 126, 0.4);
}

.surprise-sub {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #cccccc;
    margin-bottom: 45px;
}

/* Interactive Vinyl record controls */
.music-player-container {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(15, 15, 20, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 8px 18px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.vinyl {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: radial-gradient(circle, #242424 30%, #0d0d0d 31%, #2c2c2c 60%, #000000 61%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
    animation: rotateVinyl 3s linear infinite paused;
}

.vinyl.playing {
    animation-play-state: running;
}

.vinyl::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #0b0b0f;
}

.music-control-btn {
    background: none;
    border: none;
    color: #cccccc;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    letter-spacing: 0.5px;
    outline: none;
    transition: color 0.3s;
}

.music-control-btn:hover {
    color: #ffffff;
}

/* Flower Garden Section style */
.garden-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    justify-items: center;
    margin-bottom: 30px;
}

.flower-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 100px;
}

.flower-head {
    font-size: 3rem;
    position: relative;
    z-index: 2;
    transition: transform 0.5s ease;
    filter: grayscale(100%) opacity(0.3);
}

.flower-container.bloomed .flower-head {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.1) rotate(5deg);
    animation: sway 3s ease-in-out infinite alternate;
}

.flower-stem {
    width: 4px;
    height: 0px;
    background: linear-gradient(to top, #2e4d2e, #4a7c4a);
    transition: height 1.5s ease;
    border-radius: 2px;
    margin-top: -5px;
}

.flower-container.bloomed .flower-stem {
    height: 80px;
}

.flower-note {
    font-size: 0.75rem;
    color: #7d7d96;
    margin-top: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0;
    transition: opacity 1s ease;
}

.flower-container.bloomed .flower-note {
    opacity: 1;
}

/* Interactive Birthday Cake Styles */
.cake-container {
    position: relative;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 24px;
}

.cake {
    position: relative;
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cake-top, .cake-middle, .cake-bottom {
    border-radius: 8px 8px 0 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}

.cake-top {
    width: 90px;
    height: 35px;
    background: #6a6a75;
    border-bottom: 4px solid #4a4a52;
}

.cake-middle {
    width: 125px;
    height: 40px;
    background: #4a4a52;
    border-bottom: 4px solid #333338;
}

.cake-bottom {
    width: 160px;
    height: 45px;
    background: #333338;
    border-bottom: 4px solid #222226;
}

/* Cake candles and flame interaction */
.candle {
    position: absolute;
    width: 6px;
    height: 35px;
    background: repeating-linear-gradient(45deg, #dfdfe6, #dfdfe6 4px, #a3a3b3 4px, #a3a3b3 8px);
    z-index: 5;
    bottom: 120px;
    cursor: pointer;
}

#candle-1 { left: 45px; }
#candle-2 { left: 77px; }
#candle-3 { left: 109px; }

.flame {
    width: 10px;
    height: 14px;
    background: radial-gradient(circle at bottom, #ff9e00 20%, #ff5e00 80%);
    border-radius: 50% 50% 20% 20%;
    position: absolute;
    top: -14px;
    left: -2px;
    box-shadow: 0 0 10px rgba(255, 158, 0, 0.6);
    animation: flameFlicker 0.15s ease infinite alternate;
}

.candle.blown-out .flame {
    display: none;
}

.wish-prompt {
    font-size: 1.2rem;
    color: #e5e5eb;
    margin-top: 15px;
    animation: fadeIn 1.2s ease forwards;
}

/* Memory Sky stars structure */
.interactive-sky {
    position: relative;
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}

.sky-star {
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s, text-shadow 0.3s;
    filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
}

.sky-star:hover {
    transform: scale(1.3) rotate(15deg);
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
}

/* Interactive letter interface */
.letter-wrapper {
    position: relative;
    width: 100%;
    min-height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Sealed Letter Envelope style */
.envelope {
    position: relative;
    width: 180px;
    height: 110px;
    background: #333338;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    cursor: pointer;
    transition: transform 0.4s;
    z-index: 5;
}

.envelope:hover {
    transform: scale(1.05) translateY(-5px);
}

.flap {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 90px solid transparent;
    border-right: 90px solid transparent;
    border-top: 55px solid #4a4a52;
    transform-origin: top;
    transition: transform 0.4s ease 0.2s;
    z-index: 6;
}

.envelope:hover .flap {
    transform: rotateX(180deg);
}

.pocket {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 90px solid #2b2b30;
    border-right: 90px solid #2b2b30;
    border-bottom: 55px solid #28282d;
    border-radius: 0 0 8px 8px;
    z-index: 7;
}

.seal {
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 8;
    font-size: 1.5rem;
    transition: transform 0.4s;
}

.envelope:hover .seal {
    transform: translateX(-50%) scale(0);
}

/* Elegant unfolding written letter paper */
.letter-paper {
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 500px;
    background: #dfdfe6;
    color: #1a1a24;
    border-radius: 8px;
    padding: 35px 25px 25px 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 20;
    text-align: left;
    max-height: 480px;
    overflow-y: auto;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    transform: scale(0.9) translateY(50px);
    opacity: 0;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s;
}

.letter-paper.open {
    transform: scale(1) translateY(0);
    opacity: 1;
}

.close-letter {
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 1.8rem;
    cursor: pointer;
    color: #55555e;
    transition: color 0.3s;
}

.close-letter:hover {
    color: #000000;
}

.letter-content {
    line-height: 1.7;
    font-size: 1.05rem;
}

.letter-content p {
    margin-bottom: 18px;
}

.letter-header {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 24px !important;
}

.letter-footer {
    margin-top: 30px;
    text-align: right;
    line-height: 1.5;
}

.red-heart {
    color: #ff3e60;
}

/* Interactive Hug Button style */
.hug-btn {
    background: rgba(255, 94, 126, 0.1);
    border: 1px solid rgba(255, 94, 126, 0.3);
    color: #ffccd5;
    padding: 12px 28px;
    font-size: 0.9rem;
    border-radius: 50px;
    cursor: pointer;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition: all 0.3s;
}

.hug-btn:hover {
    background: rgba(255, 94, 126, 0.25);
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 94, 126, 0.3);
}

/* Global viewport heartbeat pulsing animation */
.heartbeat-active {
    animation: globalHeartbeat 0.8s ease;
}

/* Gift reveal mechanics */
.gift-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.gift-box {
    position: relative;
    width: 100px;
    height: 100px;
    background: #ff3e60;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: transform 0.3s;
}

.gift-box:hover {
    transform: scale(1.05);
}

.gift-lid {
    position: absolute;
    width: 110px;
    height: 25px;
    background: #ff5a77;
    top: -20px;
    left: -5px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: transform 0.5s ease-out;
}

.gift-box.opened .gift-lid {
    transform: translateY(-80px) rotate(-15deg);
    opacity: 0;
}

.gift-body::after {
    content: '';
    position: absolute;
    left: 45px;
    top: 0;
    width: 10px;
    height: 100%;
    background: #ffffff;
}

.gift-lid::after {
    content: '';
    position: absolute;
    left: 50px;
    top: 0;
    width: 10px;
    height: 100%;
    background: #ffffff;
}

.gift-bow {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    z-index: 2;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.gift-box.opened .gift-bow {
    transform: translate(-50%, -100px) rotate(45deg);
    opacity: 0;
}

.gift-label {
    margin-top: 25px;
    font-size: 1.4rem;
    letter-spacing: 1px;
}

/* Sequential scrolling fade-words on gift open */
#love-messages {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.fade-word {
    font-size: 2.2rem;
    font-weight: 300;
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 1.5s ease, transform 1.5s ease;
}

.fade-word.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Final End Screen elements */
.final-letter {
    max-width: 500px;
    padding: 24px;
}

.final-title {
    font-size: 2.6rem;
    font-weight: 300;
    margin-bottom: 20px;
    color: #ffffff;
}

.final-sub {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 30px;
    color: #ffccd5;
}

.final-signature {
    font-size: 1.5rem;
    font-style: italic;
    color: #ffffff;
}

/* Standard keyframe sets */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 4s ease-in-out infinite;
}

@keyframes sway {
    0% { transform: rotate(-3deg); }
    100% { transform: rotate(3deg); }
}

@keyframes flameFlicker {
    0% { transform: scale(1) rotate(-1deg); }
    100% { transform: scale(1.1) rotate(2deg); }
}

@keyframes globalHeartbeat {
    0% { transform: scale(1); }
    25% { transform: scale(1.02); }
    50% { transform: scale(0.99); }
    75% { transform: scale(1.01); }
    100% { transform: scale(1); }
}

@keyframes rotateVinyl {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-pop {
    animation: fadeIn 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.animate-fade-delayed {
    opacity: 0;
    animation: fadeIn 1s ease 1s forwards;
}

/* Next Step Trigger button formatting */
.next-step-trigger-wrapper {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* Custom Scrollbar for elegant dark theme */
.scrollable-step::-webkit-scrollbar {
    width: 6px;
}

.scrollable-step::-webkit-scrollbar-track {
    background: transparent;
}

.scrollable-step::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

/* Mobile Optimizations */
@media (max-width: 600px) {
    .glow-text { font-size: 1.4rem; }
    .prompt-text { font-size: 1.8rem; }
    .surprise-title { font-size: 2.2rem; }
    .surprise-sub { font-size: 1.1rem; }
    .section-title { font-size: 1.8rem; }
    .letter-text { font-size: 1.5rem; }
    .letter-paper { max-height: 400px; padding: 25px 15px; }
    .letter-content { font-size: 0.95rem; }
    .scroller-inner { padding-top: 80px; gap: 100px; }
    .garden-grid { gap: 20px; }
    .fade-word { font-size: 1.8rem; }
    .final-title { font-size: 2rem; }
    .final-sub { font-size: 1.4rem; }
}
