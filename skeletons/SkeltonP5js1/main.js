function setup() {
  createCanvas(400, 400);
  switchScene(scene1);
}

function draw() {
    // if there is a current scene and it has a render function, call it
  if (currentScene && currentScene.render) {
    currentScene.render();
  }
}

function keyPressed() {
    // A keypressed event has occured
    // If there is a current scene and it has a keyPressed function, call it
  if (currentScene && currentScene.keyPressed) {
    currentScene.keyPressed();
  }
}


