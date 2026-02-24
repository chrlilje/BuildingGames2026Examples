function setup() {
  createCanvas(600, 400);
  gameConfig.blockW = width/15;
  createBlocks();
}

function draw() {
  background(220);
  // Update things
  updateBall(gameObjects.ball);

  // draw things
  drawBall(gameObjects.ball);
  drawBlocks(gameObjects.blocks);
}
