/**
 * rules.js
 * Her bor alle reglerne. Funktionerne her ændrer på tallene i state.js.
 */

/**
 * Opdaterer boldens position og tjekker med det samme for væg-kollision.
 */
function updateBallPosition() {
    // 1. Flyt bolden
    state.ballX = state.ballX + state.ballSpeedX;
    state.ballY = state.ballY + state.ballSpeedY;

    // 2. Tjek med det samme om den nye position er lovlig
    checkWallCollision();
    checkBrickCollision(); // Tjek også klodserne
}

/**
 * Holder bolden inden for lærredets rammer.
 * Vi bruger Math.abs() for at sikre, at bolden tvinges VÆK fra væggen,
 * så den ikke sidder fast (the "stuck in wall" bug).
 */
function checkWallCollision() {
    // Tjek højre væg
    if (state.ballX > width) {
        // Tving hastigheden til at være negativ (venstre), uanset hvad
        state.ballSpeedX = -Math.abs(state.ballSpeedX);
    }

    // Tjek venstre væg
    if (state.ballX < 0) {
        // Tving hastigheden til at være positiv (højre)
        state.ballSpeedX = Math.abs(state.ballSpeedX);
    }

    // Tjek loftet
    if (state.ballY < 0) {
        // Tving hastigheden til at være positiv (nedad)
        state.ballSpeedY = Math.abs(state.ballSpeedY);
    }

    // Tjek gulvet og træk et liv, hvis bolden rammer bunden
    if (state.ballY > height) {
        state.lives -= 1;
        resetBallToCenter();
    }
}

/**
 * Sikrer at paddlen bliver inden for lærredets rammer.
 * Vi tager højde for paddlens bredde, så den ikke forsvinder ud til højre.
 */
function constrainPaddle() {
    // Tjek venstre kant
    if (state.paddleX < 0) {
        state.paddleX = 0;
    }

    // Tjek højre kant (lærredets bredde minus paddlens egen bredde)
    if (state.paddleX > width - state.paddleWidth) {
        state.paddleX = width - state.paddleWidth;
    }
}

/**
 * Tjekker om bolden rammer paddlen.
 * Hvis den gør, sendes bolden opad igen med Math.abs.
 */
function checkPaddleCollision() {
    // 1. Er bolden overhovedet nede i samme højde som paddlen?
    // Vi tjekker om boldens bund rammer paddlens top
    if (state.ballY + state.ballSize / 2 >= state.paddleY &&
        state.ballY - state.ballSize / 2 <= state.paddleY + state.paddleHeight) {
        
        // 2. Er bolden inden for paddlens venstre og højre kant?
        if (state.ballX >= state.paddleX && state.ballX <= state.paddleX + state.paddleWidth) {
            
            // 3. Kollision bekræftet! Send bolden opad (negativ hastighed)
            state.ballSpeedY = -Math.abs(state.ballSpeedY);
            
            // Bonus: Man kunne rykke bolden præcis til toppen af paddlen 
            // for at undgå at den bliver "fanget" inde i paddlen.
            state.ballY = state.paddleY - state.ballSize / 2;
        }
    }
}

/**
 * Tjekker om bolden rammer nogen af de aktive klodser.
 * Hvis der er hit: Deaktiver klodsen, tildel point og vend bolden.
 */
function checkBrickCollision() {
    for (let i = 0; i < state.bricks.length; i++) {
        let brick = state.bricks[i];

        // Vi tjekker kun på klodser, der ikke er ramt endnu
        if (brick.active === true) {

            // AABB Kollision (samme logik som ved paddlen)
            if (state.ballX + state.ballSize / 2 >= brick.x &&
                state.ballX - state.ballSize / 2 <= brick.x + brick.width &&
                state.ballY + state.ballSize / 2 >= brick.y &&
                state.ballY - state.ballSize / 2 <= brick.y + brick.height) {

                // 1. Logik: Fjern klodsen og giv point
                brick.active = false;
                state.score = state.score + 10;

                // 2. Fysik: Vend bolden
                // Vi bruger Math.abs for at sikre den ikke bliver "fanget" inde i klodsen
                // Hvis bolden kom oppefra, skal den op (negativ), ellers ned (positiv)
                if (state.ballY < brick.y) {
                    state.ballSpeedY = -Math.abs(state.ballSpeedY);
                } else {
                    state.ballSpeedY = Math.abs(state.ballSpeedY);
                }

                // 3. Afbryd loopet: Bolden kan kun ramme én klods per frame
                break;
            }
        }
    }
}