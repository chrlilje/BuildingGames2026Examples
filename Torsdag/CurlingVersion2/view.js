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
        size*0.1,size*0.1,size*0.1,size*0.1
    );
    pop();
}
    
function drawAllStones(stoneArray){
    for(let stone of stoneArray){
        drawStone(stone.x, stone.y, stone.r, stone.size);
    }
}

function drawTarget(x, y, size) {
    push();
    translate(x, y);
    noStroke(); // Fjerner de hårde sorte kanter

    // 12-fods cirklen - En dybere blå
    fill("SteelBlue"); 
    circle(0, 0, size);
    
    // 8-fods cirklen - En knækket hvid (så den ikke skærer i øjnene)
    fill("WhiteSmoke");
    circle(0, 0, size * 0.66);
    
    // 4-fods cirklen - En varmere rød/orange
    fill("Crimson");
    circle(0, 0, size * 0.33);
    
    // "The Button" - Den helt hvide i midten for kontrast
    fill("GhostWhite");
    circle(0, 0, size * 0.08);
    
    pop();
}