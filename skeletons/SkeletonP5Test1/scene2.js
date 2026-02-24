scene2.enter = function() {
  // Keep choice persistent unless reset for a new game.
};

scene2.render = function() {
  background(64, 48, 35);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Scene 2: Make a Choice", width / 2, 90);

  textSize(20);
  text("Press 3 to follow the glowing river path.", width / 2, 170);
  text("Press 4 to climb the windy hill trail.", width / 2, 205);
};

scene2.keyPressed = function() {
  if (key === "3") {
    scene2.choice = 3;
    switchScene(scene3);
  }

  if (key === "4") {
    scene2.choice = 4;
    switchScene(scene4);
  }
};

scene2.exit = function() {
  // Nothing to clean up for now.
};
