let scene1 = {
}

scene1.enter = function() {
    console.log("Entering Scene 1");
}

scene1.keyPressed = function() {
    if (key === '1') {
        switchScene(scene1);
    } else if (key === '2') {
        switchScene(scene2);
    }
}
scene1.update = function() {
    // Ingen updates
}

scene1.render = function() {
  background(220);
  fill(255, 0, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Scene 1", width / 2, height / 2);
}

scene1.exit = function() {
    console.log("Exiting Scene 1");
}
