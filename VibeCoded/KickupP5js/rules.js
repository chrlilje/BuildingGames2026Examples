function resetBallToCenter() {
	// Reset til midten giver ensartet genstart, så fejl føles fair.
	gameState.ball.x = gameState.world.width * 0.5;
	gameState.ball.y = gameState.world.height * 0.35;
	gameState.ball.vx = random([-2.4, -1.8, 1.8, 2.4]);
	gameState.ball.vy = -3.6;
}

function handleWallAndCeilingBounce() {
	const ball = gameState.ball;
	const world = gameState.world;

	if (ball.x - ball.radius <= 0) {
		// Math.abs tvinger retningen væk fra væggen, så bolden ikke kan hænge fast i kanten.
		ball.x = ball.radius;
		ball.vx = Math.abs(ball.vx);
	}

	if (ball.x + ball.radius >= world.width) {
		// Vi spejler fortegnet konsekvent for at undgå tilfældige dobbeltkollisioner.
		ball.x = world.width - ball.radius;
		ball.vx = -Math.abs(ball.vx);
	}

	if (ball.y - ball.radius <= 0) {
		// Samme princip i loftet holder fysikken forudsigelig på tværs af alle kanter.
		ball.y = ball.radius;
		ball.vy = Math.abs(ball.vy);
	}
}

function handlePadKick() {
	const ball = gameState.ball;
	const pad = gameState.pad;

	const overlapsX = ball.x + ball.radius >= pad.x - pad.width * 0.5 &&
		ball.x - ball.radius <= pad.x + pad.width * 0.5;
	const overlapsY = ball.y + ball.radius >= pad.y - pad.height * 0.5 &&
		ball.y - ball.radius <= pad.y + pad.height * 0.5;

	if (overlapsX && overlapsY && ball.vy > 0) {
		const hitOffset = (ball.x - pad.x) / (pad.width * 0.5);
		// Vi placerer bolden oven på padden for at undgå, at samme overlap tælles flere frames i træk.
		ball.y = pad.y - pad.height * 0.5 - ball.radius;
		// Opadrettet fart tvinges med Math.abs, så sparket altid føles tydeligt og stabilt.
		ball.vy = -Math.abs(ball.vy) - 0.2;
		// Sideafvigelse belønner præcision, så spilleren kan styre banens retning aktivt.
		ball.vx = ball.vx + hitOffset * 5;
		gameState.score = gameState.score + 1;
	}
}

function handleBottomBoundary() {
	const ball = gameState.ball;
	const world = gameState.world;

	if (ball.y - ball.radius > world.height) {
		// Hurtig reset holder flowet højt i et arkade-spil i stedet for at stoppe med menu.
		gameState.isGameOver = true;
		gameState.score = 0;
		resetBallToCenter();
		gameState.isGameOver = false;
	}
}

function updateGameRules() {
	const ball = gameState.ball;

	// Vi opdaterer fart og position i små trin, så fysikken føles stabil og forudsigelig.
	ball.vy = ball.vy + gameState.world.gravity;
	ball.x = ball.x + ball.vx;
	ball.y = ball.y + ball.vy;

	handleWallAndCeilingBounce();
	handlePadKick();
	handleBottomBoundary();
}
