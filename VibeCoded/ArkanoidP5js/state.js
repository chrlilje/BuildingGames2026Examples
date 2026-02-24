/**
 * state.js
 * Her bor al dataen. Ingen beregninger, kun tal og værdier.
 */

const state = {


    // Boldens tilstand
    ballX: 150,
    ballY: 150,
    ballSize: 15,
    ballSpeedX: 4,
    ballSpeedY: -4,

    // Paddlens tilstand
    paddleX: 200,
    paddleY: 380,
    paddleWidth: 80,
    paddleHeight: 15,

    // Klodserne (Bricks)
    // Vi starter med en tom liste, som vi kan fylde senere
    bricks: [],

    // Spillets overordnede status
    score: 0,
    lives: 3,
    isGameOver: false
};

/**
 * En funktion til at nulstille bolden til midten
 */
function resetBallToCenter() {
    state.ballX = 200;
    state.ballY = 200;
    state.ballSpeedX = 4;
    state.ballSpeedY = -4;
}

/**
 * Opretter et grid af klodser og lægger dem i state.bricks.
 * Vi bruger almindelige loops, så det er nemt at følge med i.
 */
function createBricks() {
    const rows = 4;
    const cols = 5;
    const padding = 10;
    const w = 60;
    const h = 20;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const brick = {
                x: c * (w + padding) + 35,
                y: r * (h + padding) + 50,
                width: w,
                height: h,
                active: true // Så vi kan "fjerne" dem uden at slette dem fra arrayet
            };
            state.bricks.push(brick);
        }
    }
}