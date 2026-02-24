/**
 * render_p5.js
 * Her bor alle p5.js specifikke tegne-funktioner.
 * Denne fil ved, hvordan man læser state.js og tegner det på skærmen.
 */

function drawGame() {
    // Ryd skærmen
    background(30);

    // Tegn de forskellige elementer
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    drawLives();
}

function drawBall() {
    fill("white");
    noStroke();
    circle(state.ballX, state.ballY, state.ballSize);
}

function drawPaddle() {
    fill("cyan");
    rect(
        state.paddleX, 
        state.paddleY, 
        state.paddleWidth, 
        state.paddleHeight
    );
}

function drawScore() {
    fill("white");
    textSize(16);
    text("Points: " + state.score, 20, 30);
}

// Vi skal også tegne lives
function drawLives() {
    fill("white");
    textSize(16);
    text("Lives: " + state.lives, 120, 30);
}

// Vi lader denne være tom til at starte med, 
// så de studerende selv kan implementere loopet senere.
function drawBricks() {
    // state.bricks.forEach(...) osv.
    for (let i = 0; i < state.bricks.length; i++) {
        const brick = state.bricks[i];
        if (brick.active) {
            fill("red");
            rect(brick.x, brick.y, brick.width, brick.height);
        }
    }
}