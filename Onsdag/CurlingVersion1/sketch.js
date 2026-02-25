function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Update all stone
  updateAllStones(stones);

  // Dísplay all stones
  drawAllStones(stones);
}
