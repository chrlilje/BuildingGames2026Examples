let scene2 = {};

scene2.enter = function() {
  // Initialize once so values persist unless we reset on restart.
  if (scene2.startX === undefined) {
    scene2.startX = width / 2;
    scene2.startY = 90;
  }

  scene2.resetRound();
};

scene2.resetRound = function() {
  scene2.shipX = scene2.startX;
  scene2.shipY = scene2.startY;

  // Velocities are in meters per second for teaching clarity.
  scene2.shipVelX = 0;
  scene2.shipVelY = 0;

  scene2.shipWidth = 26;
  scene2.shipHeight = 34;

  // Simple physics values (m/s^2).
  scene2.gravity = 0.8;
  scene2.boostAcceleration = 1.4;
  scene2.sideAcceleration = 1.0;

  // Convert meters to pixels for visual motion on screen.
  scene2.pixelsPerMeter = 60;

  // Ground line location.
  scene2.groundY = height - 70;

  scene2.maxSafeLandingSpeed = 1.0;
};

scene2.update = function() {
  let dt = deltaTime / 1000;

  // Keep dt in a safe range in case of lag spikes.
  if (dt > 0.05) {
    dt = 0.05;
  }

  // Vertical physics: gravity always pulls down.
  scene2.shipVelY += scene2.gravity * dt;

  // Up arrow gives upward acceleration (boost).
  if (keyIsDown(UP_ARROW)) {
    scene2.shipVelY -= scene2.boostAcceleration * dt;
  }

  // Left and right arrows push sideways.
  if (keyIsDown(LEFT_ARROW)) {
    scene2.shipVelX -= scene2.sideAcceleration * dt;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    scene2.shipVelX += scene2.sideAcceleration * dt;
  }

  // Light damping so horizontal speed does not grow forever.
  scene2.shipVelX *= 0.995;

  // Move ship using velocity.
  scene2.shipX += scene2.shipVelX * scene2.pixelsPerMeter * dt;
  scene2.shipY += scene2.shipVelY * scene2.pixelsPerMeter * dt;

  // Keep ship inside left/right bounds.
  let leftLimit = scene2.shipWidth / 2;
  let rightLimit = width - scene2.shipWidth / 2;

  if (scene2.shipX < leftLimit) {
    scene2.shipX = leftLimit;
    scene2.shipVelX = 0;
  }

  if (scene2.shipX > rightLimit) {
    scene2.shipX = rightLimit;
    scene2.shipVelX = 0;
  }

  // Ground collision check.
  let shipBottom = scene2.shipY + scene2.shipHeight / 2;

  if (shipBottom >= scene2.groundY) {
    // Clamp ship to the ground line.
    scene2.shipY = scene2.groundY - scene2.shipHeight / 2;

    // Save landing speed so result screens can display it.
    scene2.lastLandingSpeed = scene2.shipVelY;

    if (scene2.shipVelY <= scene2.maxSafeLandingSpeed) {
      switchScene(scene4);
    } else {
      switchScene(scene3);
    }
  }
};

scene2.render = function() {
  background(8, 10, 25);

  // Sky stars.
  fill(255);
  noStroke();
  circle(80, 70, 3);
  circle(210, 110, 3);
  circle(520, 60, 2);
  circle(700, 120, 3);

  // Ground.
  fill(90, 70, 45);
  rect(0, scene2.groundY, width, height - scene2.groundY);

  // Spaceship body.
  push();
  translate(scene2.shipX, scene2.shipY);

  fill(210);
  rectMode(CENTER);
  rect(0, 0, scene2.shipWidth, scene2.shipHeight, 4);

  fill(100, 180, 255);
  ellipse(0, -5, 10, 10);

  stroke(230);
  line(-8, scene2.shipHeight / 2, -12, scene2.shipHeight / 2 + 8);
  line(8, scene2.shipHeight / 2, 12, scene2.shipHeight / 2 + 8);
  noStroke();

  // Thruster flame when boosting.
  if (keyIsDown(UP_ARROW)) {
    fill(255, 140, 40);
    triangle(-5, scene2.shipHeight / 2, 5, scene2.shipHeight / 2, 0, scene2.shipHeight / 2 + 16);
  }

  pop();

  // HUD text.
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  text("Vertical speed: " + scene2.shipVelY.toFixed(2) + " m/s", 15, 12);
  text("Safe landing: <= 1.00 m/s", 15, 36);
};

scene2.keyPressed = function() {
  // Press R to restart while still in game.
  if (key === "r" || key === "R") {
    scene2.resetRound();
  }
};

scene2.exit = function() {
  // Nothing required here for now.
};
