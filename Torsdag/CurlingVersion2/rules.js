// Regler - Update the model
function updateStone(s){
    // s is a stone object
    // Update the position with the velocities
    s.x = s.x + s.vx;
    s.y = s.y + s.vy;
    s.r = s.r + s.vr;
    // ?? Noget med friktion... 
    s.vx = s.vx*0.99;
    s.vy = s.vy*0.99;
    s.vr = s.vr*0.99;
    // Check for wall collisions
    wallBounce(s,0,width,0,height);
    
}

function updateAllStones(stoneArray){
    for(let stone of stoneArray){
        updateStone(stone);
    }

        // Many many collision:
    for(let s1 of stoneArray){
        for(let s2 of stoneArray){
            let distS1S2 = dist(s1.x,s1.y,s2.x,s2.y);
            if(distS1S2 < s1.size){
                collideRotate(s1,s2);
            }
        }        
    }
}

function wallBounce(s, left, right, top, bottom) {
    
    let radius = s.size * 0.5;
    
    // Left wall
    if (s.x - radius < left) {
        s.x = left + radius;
        s.vx = Math.abs(s.vx);       // sørg for at bevæge sig mod højre
    }
    
    // Right wall
    if (s.x + radius > right) {
        s.x = right - radius;
        s.vx = -Math.abs(s.vx);      // sørg for at bevæge sig mod venstre
    }
    
    // Top wall
    if (s.y - radius < top) {
        s.y = top + radius;
        s.vy = Math.abs(s.vy);       // bevæg nedad
    }
    
    // Bottom wall
    if (s.y + radius > bottom) {
        s.y = bottom - radius;
        s.vy = -Math.abs(s.vy);      // bevæg opad
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

function collideRotate(b1, b2) {
    // 1. Normalvektor mellem centre
    let dx = b1.x - b2.x;
    let dy = b1.y - b2.y;
    let dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist === 0) return;
    
    let nx = dx / dist;
    let ny = dy / dist;
    
    // 2. Relativ hastighed
    let rvx = b1.vx - b2.vx;
    let rvy = b1.vy - b2.vy;
    
    // 3. Projektion på normalen (hvor hårdt de banker sammen)
    let p = rvx * nx + rvy * ny;
    
    // Hvis de bevæger sig væk fra hinanden → ingen kollision
    if (p > 0) return;
    
    // --- NYT: Beregn rotation baseret på "skævheden" af rammestødet ---
    // Vi finder tangent-vektoren (vinkelret på normalen)
    let tx = -ny;
    let ty = nx;
    
    // Find ud af hvor meget de "snitter" hinanden (tangentiel hastighed)
    let tangentVelocity = rvx * tx + rvy * ty;
    
    // Giv dem et lille "spin-kick" baseret på sammenstødet
    // Vi deler med en faktor (f.eks. 10), så de ikke snurrer helt vildt
    let rotationEffect = tangentVelocity * 0.01;
    
    b1.vr = b1.vr + rotationEffect; // vr er rotations-hastighed
    b2.vr = b2.vr + rotationEffect;
    // ----------------------------------------------------------------
    
    // 4. Opdater hastigheder (ens masse, elastisk)
    b1.vx = b1.vx - p * nx;
    b1.vy = b1.vy - p * ny;
    
    b2.vx = b2.vx + p * nx;
    b2.vy = b2.vy + p * ny;
}