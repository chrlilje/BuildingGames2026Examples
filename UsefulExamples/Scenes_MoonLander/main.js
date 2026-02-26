function setup() {
  createCanvas(800, 500);
  switchScene(scene1);
}

function draw() {
  if (currentScene && currentScene.update) {
    currentScene.update();
  }

  if (currentScene && currentScene.render) {
    currentScene.render();
  }
}

function keyPressed() {
  if (currentScene && currentScene.keyPressed) {
    currentScene.keyPressed();
  }
}
