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
  stone1 = new Stone(100,200,0,0,40,0);
  console.log(stone1);
}

function draw() {
  background(220);

// Draw the stone from our parametrs of stone1
  drawStone(stone1.x, stone1.y, stone1.r, stone1.size );

}

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