function drawCurlingStone(x, y, size,color){
    // Bottom circle
    fill("darkgrey");
    circle(x,y,size);
    fill(color);
    circle(x,y,size*0.8);
    fill(color);
    rectMode(CENTER);
    rect(x,y-size*0.1,0.2*size,0.55*size,2,2,3,3);
}

function drawAllStones(){
    for(let s of stones){
        drawCurlingStone(s.x,s.y,s.size,s.color);
    }
}