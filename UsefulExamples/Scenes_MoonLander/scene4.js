let scene4 = {};

scene4.enter = function() {
  // No setup needed.
};

scene4.update = function() {
  // No game logic on win screen.
};

scene4.render = function() {
  background(8, 40, 12);

  fill(140, 255, 140);
  textAlign(CENTER, CENTER);

  textSize(56);
  text("SAFE LANDING", width / 2, height / 2 - 70);

  textSize(24);
  text("Landing speed: " + scene2.lastLandingSpeed.toFixed(2) + " m/s", width / 2, height / 2);
  text("Great control!", width / 2, height / 2 + 35);

  textSize(26);
  text("Press SPACE to play again", width / 2, height / 2 + 110);
};

scene4.keyPressed = function() {
  if (key === " ") {
    switchScene(scene2);
  }
};

scene4.exit = function() {
  // Nothing to clean up.
};
