// Model - Data - State 
// A stone that have a position and velocity
class Stone {
  constructor(x,y,vx,vy,size){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
  }
}

let stone1;
function setup() {
  createCanvas(400, 400);
  stone1 = new Stone(100,200,0,0,40);
  console.log(stone1);
}
let x = 0;
function draw() {
  background(220);
 drawStone(x,200);
 x = x + 1;
}

function drawStone(x,y){
 // Kan vi tegne noget som ligner en sten?
  push();
  translate(x,y);
  rotate(0.1);
  fill("grey")
  circle(0,0,50);
  fill("orange")
  circle(0,0,40);
  rect(-5,-10,10,30,2,2,5,5);
  pop();
}