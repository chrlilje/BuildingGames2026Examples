function setup() {
  createCanvas(400, 400);
  mapCoordinatesToNames();
}

function draw() {
  background(220);
  image(appleTree.winter,200,200);
  image(appleTree.spring,300,200);
}

