// Vi samler al data ét sted, så regler, input og rendering aldrig har hver deres skjulte sandhed.
const gameState = {
	world: {
    // Faste mål gør fysik og sværhedsgrad nemmere at afstemme og forklare.
		width: 800,
		height: 700,
		gravity: 0.35
	},
	ball: {
    // Startfart i begge akser giver variation, så første sekunder ikke føles statiske.
		x: 300,
		y: 140,
		vx: 2.2,
		vy: -1.5,
		radius: 16
	},
	pad: {
    // Padden ligger lavt, så spilleren får tid til at aflæse boldens bane.
		x: 300,
		y: 600,
		width: 110,
		height: 16,
		speed: 6
	},
	score: 0,
	isGameOver: false
};
