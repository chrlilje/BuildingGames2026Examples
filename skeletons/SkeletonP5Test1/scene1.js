scene1.enter = function() {
  // Scene 1 story setup text is static.
};

scene1.render = function() {
  background(35, 45, 65);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Scene 1: Setup", width / 2, 90);

  textSize(20);
  text("You and your friend find an old lantern map.", width / 2, 170);
  text("It points to two possible paths in the woods.", width / 2, 205);

  textSize(17);
  text("Press N for next scene", width / 2, 280);
};

scene1.keyPressed = function() {
  if (key === "n" || key === "N") {
    switchScene(scene2);
  }
};

scene1.exit = function() {
  // Nothing to clean up for now.
};
