titleScene.enter = function() {
  // Title scene does not need persistent setup yet.
};

titleScene.render = function() {
  background(18, 24, 38);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(42);
  text("The Lantern Path", width / 2, 110);

  textSize(20);
  text("A short interactive story", width / 2, 170);

  textSize(18);
  text("Press ENTER to begin", width / 2, 260);
};

titleScene.keyPressed = function() {
  if (keyCode === ENTER) {
    switchScene(scene1);
  }
};

titleScene.exit = function() {
  // Nothing to clean up for now.
};
