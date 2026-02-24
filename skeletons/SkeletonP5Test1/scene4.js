scene4.enter = function() {
  // Scene 4 has no extra persistent values yet.
};

scene4.render = function() {
  background(88, 65, 24);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Scene 4: Hill Trail", width / 2, 90);

  textSize(20);
  text("You climb the hill and watch the sunrise.", width / 2, 170);
  text("The path is harder, but you feel brave.", width / 2, 205);

  textSize(17);
  text("Press N to continue to the ending", width / 2, 280);
};

scene4.keyPressed = function() {
  if (key === "n" || key === "N") {
    switchScene(scene5);
  }
};

scene4.exit = function() {
  // Nothing to clean up for now.
};
