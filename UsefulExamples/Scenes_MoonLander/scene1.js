let scene1 = {};

scene1.enter = function() {
  if (scene1.title === undefined) {
    scene1.title = "Simple Moon Lander";
  }
};

scene1.update = function() {
  // No game logic on intro screen.
};

scene1.render = function() {
  background(10, 15, 30);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(44);
  text(scene1.title, width / 2, height / 2 - 90);

  textSize(24);
  text("Arrow keys to move", width / 2, height / 2 - 20);
  text("UP = boost, LEFT/RIGHT = side thrust", width / 2, height / 2 + 15);

  textSize(22);
  text("Land with vertical speed <= 1.00 m/s", width / 2, height / 2 + 70);

  textSize(26);
  text("Press SPACE to Start", width / 2, height / 2 + 140);
};

scene1.keyPressed = function() {
  if (key === " ") {
    switchScene(scene2);
  }
};

scene1.exit = function() {
  // Nothing to clean up.
};
