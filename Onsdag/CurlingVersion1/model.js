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

// et array til at holde styr på mange stones
let stones = [];

function addNewStone(x,y,vx,vy){
    let size = 50;
    let rot = 0;
    stones.push(new Stone(x,y,vx,vy,size,rot));
}