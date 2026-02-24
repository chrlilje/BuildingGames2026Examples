// Inputlaget isoleres, så kontrolmetoder kan ændres uden at røre fysik eller rendering.
function updateInputState() {
	const pad = gameState.pad;
	const world = gameState.world;

	// Musen sætter standardmålet, fordi det giver direkte og let forståelig kontrol.
	const mouseTarget = constrain(mouseX, pad.width * 0.5, world.width - pad.width * 0.5);
	pad.x = mouseTarget;

	// Piletaster fungerer som backup, så spillet også kan styres uden mus.
	if (keyIsDown(LEFT_ARROW)) {
		pad.x = pad.x - pad.speed;
	}

	if (keyIsDown(RIGHT_ARROW)) {
		pad.x = pad.x + pad.speed;
	}

	// Vi validerer altid grænser efter opdatering for at holde tilstanden lovlig.
	pad.x = constrain(pad.x, pad.width * 0.5, world.width - pad.width * 0.5);
}
