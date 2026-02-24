/**
 * main.js
 */

function setup() {
    createCanvas(settings.canvasWidth, settings.canvasHeight);
    createBricks(); // Vi opretter klodserne, når spillet starter
}

function draw() {
    // 1. Input
    handleInput();

    // 2. Logik (Regler) - opdaterer state baseret på input og spillets regler
    updateBallPosition();
    constrainPaddle();
    checkPaddleCollision();

    // 3. Visualisering (UI)
    drawGame();
}