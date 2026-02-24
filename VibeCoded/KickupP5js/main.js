// Main fungerer som dirigent, så rækkefølgen mellem lag er tydelig for elever.
function setup() {
	// Canvas-størrelsen kommer fra state for at bevare én samlet sandhed.
	createCanvas(gameState.world.width, gameState.world.height);
}

function draw() {
	// Input før regler gør, at den aktuelle spillerhandling påvirker samme frame.
	updateInputState();
	// Regler før rendering sikrer, at vi altid tegner den nyeste lovlige tilstand.
	updateGameRules();
	renderGame();
}
