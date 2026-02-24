function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  switchScene(scene1);
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
