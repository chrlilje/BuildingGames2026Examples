let scene3 = {};

scene3.enter = function() {
  // No setup needed.
};

scene3.update = function() {
  // No game logic on crash screen.
};

scene3.render = function() {
  background(40, 8, 8);

  fill(255, 120, 120);
  textAlign(CENTER, CENTER);

  textSize(56);
  text("CRASH", width / 2, height / 2 - 70);

  textSize(24);
  text("Landing speed was " + scene2.lastLandingSpeed.toFixed(2) + " m/s", width / 2, height / 2);
  text("You needed <= 1.00 m/s", width / 2, height / 2 + 35);

  textSize(26);
  text("Press SPACE to try again", width / 2, height / 2 + 110);
};

scene3.keyPressed = function() {
  if (key === " ") {
    switchScene(scene2);
  }
};

scene3.exit = function() {
  // Nothing to clean up.
};
