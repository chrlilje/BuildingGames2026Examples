let scene1 = {};

scene1.enter = function() {
  // Intro scene does not need one-time setup yet.
};

scene1.render = function() {
  background(20, 30, 70);
  fill(255);
  textSize(42);
  text("ARKANOID STARTER", width / 2, 130);

  textSize(22);
  text("Break all blocks to win!", width / 2, 210);
  text("Move paddle with Left and Right arrows", width / 2, 250);
  text("You lose after missing the ball 3 times", width / 2, 290);

  textSize(24);
  text("Press SPACE to start", width / 2, 380);

  textSize(16);
  text("You can return here from other scenes with I", width / 2, 440);
};

scene1.keyPressed = function() {
  if (key === " ") {
    scene2.startNewGame();
    switchScene(scene2);
  }

  if (key === "1") {
    switchScene(scene1);
  }
};

scene1.exit = function() {
  // Nothing to clean up in this simple scene.
};
