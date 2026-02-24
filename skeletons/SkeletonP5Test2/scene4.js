let scene4 = {};

scene4.enter = function() {
  // Win screen does not need special setup right now.
};

scene4.render = function() {
  background(20, 70, 30);
  fill(255);

  textSize(50);
  text("YOU WIN!", width / 2, 180);

  textSize(24);
  text("You cleared all the blocks.", width / 2, 250);
  text("Press R to play again", width / 2, 310);
  text("Press I for intro", width / 2, 350);
};

scene4.keyPressed = function() {
  if (key === "r" || key === "R") {
    scene2.startNewGame();
    switchScene(scene2);
  }

  if (key === "i" || key === "I") {
    switchScene(scene1);
  }

  if (key === "4") {
    switchScene(scene4);
  }
};

scene4.exit = function() {
  // Nothing to clean up in this simple scene.
};
