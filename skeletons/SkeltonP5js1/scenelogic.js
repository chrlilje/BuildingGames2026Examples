let currentScene;

// Scene-switch function , trigger exit on previous scene and enter on new scene
function switchScene(newScene) {
    // If currentScene exists and has an exit function, call it
    if (currentScene && currentScene.exit) {
        currentScene.exit();
    }
    currentScene = newScene; // Update currentScene to the new scene
    // If the new currentScene has an enter function, call it
    if (currentScene && currentScene.enter) {
        currentScene.enter();
    }
}

