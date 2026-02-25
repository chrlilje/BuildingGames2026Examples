function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // Update all stone
  updateAllStones(stones);
  
  // Draw the target
  drawTarget(width/2,height/2,width*0.2);
  // Dísplay all stones
  drawAllStones(stones);
}
