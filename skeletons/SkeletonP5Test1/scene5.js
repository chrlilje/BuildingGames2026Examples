scene5.enter = function() {
  // Ending text is chosen in render based on earlier scenes.
};

scene5.render = function() {
  let endingLineOne = "You return home with a good story to tell.";
  let endingLineTwo = "You learned that every path can teach you something.";

  if (scene2.choice === 3) {
    endingLineOne = "You return home guided by the river's calm light.";
    endingLineTwo = scene3.riverClue;
  }

  if (scene2.choice === 4) {
    endingLineOne = "You return home with strength from the hill climb.";
    endingLineTwo = "You didn't find the river clue, but gained confidence.";
  }

  background(30, 30, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(34);
  text("Scene 5: The Ending", width / 2, 90);

  textSize(20);
  text(endingLineOne, width / 2, 170);
  text(endingLineTwo, width / 2, 205);

  textSize(17);
  text("Press R to play again (go to title page)", width / 2, 280);
};

scene5.keyPressed = function() {
  if (key === "r" || key === "R") {
    resetStoryData();
    switchScene(titleScene);
  }
};

scene5.exit = function() {
  // Nothing to clean up for now.
};
