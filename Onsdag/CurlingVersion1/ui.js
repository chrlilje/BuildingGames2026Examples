function mousePressed(){
    addNewStone(mouseX,mouseY,0,-1);
    console.log(stones);
    cursor(HAND);
}

function mouseReleased(){
    cursor(ARROW);
}