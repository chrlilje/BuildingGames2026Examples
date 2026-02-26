

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
scene2.update = function() {
    // No updates in scene2
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
