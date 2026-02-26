function setup() {
  createCanvas(400, 400);
  setFirstScene(scene1);
}

function draw() {
    // Update the current scene
    currentScene.update();
    // render the current scene
    currentScene.render();
}

function keyPressed() {
    // A keypressed event has occured
    currentScene.keyPressed();
}
