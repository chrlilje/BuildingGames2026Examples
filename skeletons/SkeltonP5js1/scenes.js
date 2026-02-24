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



let scene2 = {
}

scene2.enter = function() {
    console.log("Entering Scene 2");
}

scene2.keyPressed = function() {
    if (key === '1') {
        switchScene(scene1);
    } else if (key === '2') {
        switchScene(scene2);
    }
}

scene2.render = function() {
  background(220);
  fill(0, 0, 255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Scene 2", width / 2, height / 2);
}   

scene2.exit = function() {
    console.log("Exiting Scene 2");
}   
