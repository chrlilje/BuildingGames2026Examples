let uiData = {};

function mousePressed(){
 //   addNewStone(mouseX,mouseY,0,-1);
    uiData.pressedX = mouseX;
    uiData.pressedY = mouseY;
    uiData.pressedFrame = frameCount;
}

function mouseReleased(){
    let newVx = (mouseX - uiData.pressedX)/(frameCount - uiData.pressedFrame);
    let newVy = (mouseY - uiData.pressedY)/(frameCount - uiData.pressedFrame);
    // ny = (nypos - gammelpos)/(nytid - gammeltid)

    // ny sten
    addNewStone(mouseX, mouseY, newVx, newVy);
}