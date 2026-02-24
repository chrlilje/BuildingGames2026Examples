let currentScene;

function switchScene(newScene) {
  if (currentScene && currentScene.exit) {
    currentScene.exit();
  }

  currentScene = newScene;

  if (currentScene && currentScene.enter) {
    currentScene.enter();
  }
}
