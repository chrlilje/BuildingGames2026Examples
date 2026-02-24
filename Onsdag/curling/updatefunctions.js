function updateAllStones(){
    for(let s of stones){
        s.x += s.vx;
        s.y += s.vy;
        
        // Bounce at the edges
        edgeBounce(s,0,width,0,height);
        
        // Add some "drag"
        s.vx = s.vx*0.999;
        s.vy = s.vy*0.999;
        
    }
    
    // Many many collision:
    for(let s1 of stones){
        for(let s2 of stones){
            let distS1S2 = dist(s1.x,s1.y,s2.x,s2.y);
            if(distS1S2 < state.stoneSize){
                collide(s1,s2);
            }
        }        
    }
}

function collide(b1, b2) {
    
    // 1. Normalvektor mellem centre
    let dx = b1.x - b2.x;
    let dy = b1.y - b2.y;
    
    let dist = Math.sqrt(dx * dx + dy * dy);
    
    // Undgå division med 0
    if (dist === 0) return;
    
    let nx = dx / dist;
    let ny = dy / dist;
    
    // 2. Relativ hastighed
    let rvx = b1.vx - b2.vx;
    let rvy = b1.vy - b2.vy;
    
    // 3. Projektion på normalen
    let p = rvx * nx + rvy * ny;
    
    // Hvis de bevæger sig væk fra hinanden → ingen kollision
    if (p > 0) return;
    
    // 4. Opdater hastigheder (ens masse, elastisk)
    b1.vx = b1.vx - p * nx;
    b1.vy = b1.vy - p * ny;
    
    b2.vx = b2.vx + p * nx;
    b2.vy = b2.vy + p * ny;
}

function edgeBounce(s, left, right, top, bottom) {
    
    let r = s.size / 2;
    
    // LEFT
    if (s.x - r < left) {
        s.x = left + r;
        s.vx = Math.abs(s.vx);
    }
    
    // RIGHT
    if (s.x + r > right) {
        s.x = right - r;
        s.vx = -Math.abs(s.vx);
    }
    
    // TOP
    if (s.y - r < top) {
        s.y = top + r;
        s.vy = Math.abs(s.vy);
    }
    
    // BOTTOM
    if (s.y + r > bottom) {
        s.y = bottom - r;
        s.vy = -Math.abs(s.vy);
    }
}