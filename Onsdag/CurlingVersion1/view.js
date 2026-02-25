// View
function drawStone(x,y,r,size){
    // Kan vi tegne noget som ligner en sten?
    push();
    translate(x,y);
    rotate(r);
    fill("grey")
    circle(0,0,size);
    fill("orange")
    circle(0,0,size*0.8);
    rect(-size*0.1,-size*0.2,
        size*0.2,size*0.6,
        size*0.1,size*0.1,size*0.1,size*0.1);
        pop();
    }
    
    function drawAllStones(stoneArray){
        for(let stone of stoneArray){
            drawStone(stone.x, stone.y, stone.r, stone.size);
        }
    }