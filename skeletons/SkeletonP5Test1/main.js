function setup() {
  createCanvas(900, 420);
  textFont("Arial");
  switchScene(titleScene);
}

function draw() {
  if (currentScene && currentScene.render) {
    currentScene.render();
  }
}

function keyPressed() {
  if (currentScene && currentScene.keyPressed) {
    currentScene.keyPressed();
  }
}
