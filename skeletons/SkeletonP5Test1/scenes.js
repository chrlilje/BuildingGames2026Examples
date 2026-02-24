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

function resetStoryData() {
  scene2.choice = undefined;
  scene3.riverClue = undefined;
}

let titleScene = {};
let scene1 = {};
let scene2 = {};
let scene3 = {};
let scene4 = {};
let scene5 = {};
