// State - Data
let ball = {
  x: 100,
  y:200,
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  // wipe
  rect(0,0,width,height);
  // Flyt bolden
  updateBall();
  // Tegne bolden
  drawBall();
}

// regler
function updateBall(){
  ball.x += 1;
}

// Grafik
function drawBall(){
  circle(ball.x,ball.y,30);
}