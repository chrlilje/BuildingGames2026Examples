// Renderlaget læser kun state, så visuelle ændringer ikke påvirker spilregler.
function renderGame() {
	// Mørk baggrund øger kontrast, så boldens bevægelse er let at aflæse.
	background(18);

	noStroke();
	fill(245);
	circle(gameState.ball.x, gameState.ball.y, gameState.ball.radius * 2);

	fill(80, 210, 150);
	rectMode(CENTER);
	rect(gameState.pad.x, gameState.pad.y, gameState.pad.width, gameState.pad.height, 6);

	// Enkel HUD holder fokus på kerneloopet uden ekstra UI-støj.
	fill(255);
	textSize(18);
	textAlign(LEFT, TOP);
	text("Score: " + gameState.score, 14, 12);
}
