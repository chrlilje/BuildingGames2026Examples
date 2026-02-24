function updateBall(b){
    b.x += b.vx;
    b.y += b.vy;
    edgeBounce(b,0,width,0,height);
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