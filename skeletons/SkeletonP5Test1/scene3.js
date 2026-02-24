scene3.enter = function() {
  // Initialize only once so this value can persist across switches.
  if (scene3.riverClue === undefined) {
    scene3.riverClue = "You found a silver compass by the river.";
  }
};

scene3.render = function() {
  background(25, 80, 92);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Scene 3: River Path", width / 2, 90);

  textSize(20);
  text("You follow the water and discover a clue:", width / 2, 170);
  text(scene3.riverClue, width / 2, 205);

  textSize(17);
  text("Press N to continue to the ending", width / 2, 280);
};

scene3.keyPressed = function() {
  if (key === "n" || key === "N") {
    switchScene(scene5);
  }
};

scene3.exit = function() {
  // Nothing to clean up for now.
};
