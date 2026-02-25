let uiData = {}

function mousePressed(){
    uiData.pressedMouseX = mouseX;
    uiData.pressedMouseY = mouseY;
    uiData.pressedFrame = frameCount;

    cursor(HAND);
}

function mouseReleased(){
    cursor(ARROW);
    let deltaX = mouseX - uiData.pressedMouseX;
    let deltaY = mouseY - uiData.pressedMouseY;
    let deltaFrame = frameCount - uiData.pressedFrame;

    let newVx = deltaX / deltaFrame;
    let newVy = deltaY / deltaFrame;


    addNewStone(mouseX,mouseY,newVx,newVy);
    
}