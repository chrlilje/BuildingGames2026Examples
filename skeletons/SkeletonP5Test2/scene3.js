let scene3 = {};

scene3.enter = function() {
  // Game-over screen does not need special setup right now.
};

scene3.render = function() {
  background(70, 20, 20);
  fill(255);

  textSize(50);
  text("GAME OVER", width / 2, 180);

  textSize(24);
  text("You missed the ball 3 times.", width / 2, 250);
  text("Press R to retry", width / 2, 310);
  text("Press I for intro", width / 2, 350);
};

scene3.keyPressed = function() {
  if (key === "r" || key === "R") {
    scene2.startNewGame();
    switchScene(scene2);
  }

  if (key === "i" || key === "I") {
    switchScene(scene1);
  }

  if (key === "3") {
    switchScene(scene3);
  }
};

scene3.exit = function() {
  // Nothing to clean up in this simple scene.
};
