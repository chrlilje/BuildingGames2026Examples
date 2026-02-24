function drawBall(b){
    fill(b.color);
    circle(b.x, b.y,b.size);
}

function drawBlocks(blocks){
    for(let block of blocks){
        rect(block.x,block.y,block.w,block.h);
    }
}