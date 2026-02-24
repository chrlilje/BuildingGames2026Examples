// State - data 
let ball = {
  x: 100,
  y:100,
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // Data - regler: Flytte bolden mod højre
  ball.x = ball.x + 2;
  // Check reglerne. Er bolden uden for rammen?
  if(ball.x > width){
    ball.x = 0;
  }

  // Vise min bold på skærmen. 
  circle(ball.x,ball.y,30);
}
