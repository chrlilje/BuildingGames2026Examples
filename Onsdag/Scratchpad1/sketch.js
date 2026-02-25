// Model - Data - State 
// A stone that have a position and velocity
class Stone {
  constructor(x,y,vx,vy,size,rot){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.r = rot;
  }
}

let stone1;
function setup() {
  createCanvas(400, 400);
  stone1 = new Stone(100,200,1,1,40,0);
  console.log(stone1);
}

function draw() {
  background(220);
// Update the model
updateStone(stone1);

// Draw the stone from our parametrs of stone1
  drawStone(stone1.x, stone1.y, stone1.r, stone1.size );

}

// Regler - Update the model
function updateStone(s){
  // s is a stone object
  // Update the position with the velocities
  s.x = s.x + s.vx;
  s.y = s.y + s.vy;
  // ?? Noget med friktion... 
  // Check for wall collisions
  wallBounce(s,0,width,0,height);
  // ??? Husk farver
}

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