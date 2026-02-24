
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230,230,200);

  // Update data
  updateAllStones();

  // Display view
  if(state.holdStone){
    drawCurlingStone(mouseX,mouseY-state.stoneSize/2,state.stoneSize,stoneColors[state.nextStoneColorIndex]);
  }
  drawAllStones();
}


