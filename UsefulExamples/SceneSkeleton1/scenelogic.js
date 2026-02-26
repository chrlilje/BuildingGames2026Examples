let currentScene;

function setFirstScene(newScene){
    currentScene = newScene; // Update currentScene to the new scene
    currentScene.enter();
    
}

// Scene-switch function , trigger exit on previous scene and enter on new scene
function switchScene(newScene) {
    currentScene.exit();
    currentScene = newScene; // Update currentScene to the new scene
    currentScene.enter();
}

