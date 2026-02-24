function mouseReleased(){
  state.holdStone = false;
  cursor(ARROW);
//let newVx = (mouseX - pmouseX)*0.2;
//let newVy = (mouseY - pmouseY)*0.2;
let framesSinceMousePressed = frameCount - state.pressedFrame;
let newVx = (mouseX - state.pressedX)/framesSinceMousePressed;
let newVy = (mouseY - state.pressedY)/framesSinceMousePressed;

let stoneConfig = {x:mouseX, y: mouseY-state.stoneSize/2, vx:newVx, vy:newVy};
let newStone = new Stone(stoneConfig);
stones.push(newStone);
console.log(newStone);
state.nextStoneColorIndex = (state.nextStoneColorIndex + 1) % stoneColors.length;
}

function mousePressed(){
  state.holdStone = true;
  state.pressedX = mouseX;
  state.pressedY = mouseY;
  state.pressedFrame = frameCount;

  cursor(HAND);
}