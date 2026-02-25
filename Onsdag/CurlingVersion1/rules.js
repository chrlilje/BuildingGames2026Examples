// Regler - Update the model
function updateStone(s){
  // s is a stone object
  // Update the position with the velocities
  s.x = s.x + s.vx;
  s.y = s.y + s.vy;
  // ?? Noget med friktion... 
  // Check for wall collisions
  wallBounce(s,0,width,0,height);

}

function updateAllStones(stoneArray){
    for(let stone of stoneArray){
        updateStone(stone);
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