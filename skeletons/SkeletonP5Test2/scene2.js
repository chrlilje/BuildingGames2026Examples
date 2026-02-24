let scene2 = {};

scene2.startNewGame = function() {
  scene2.lives = 3;
  scene2.blocksBroken = 0;
  scene2.rows = 5;
  scene2.cols = 8;
  scene2.blockWidth = 82;
  scene2.blockHeight = 24;
  scene2.blockGap = 10;
  scene2.blockTop = 70;

  scene2.paddleWidth = 120;
  scene2.paddleHeight = 18;
  scene2.paddleSpeed = 8;
  scene2.paddleY = height - 40;
  scene2.paddleX = width / 2 - scene2.paddleWidth / 2;

  scene2.ballSize = 14;
  scene2.ballSpeed = 5;
  scene2.ballX = width / 2;
  scene2.ballY = scene2.paddleY - scene2.ballSize;
  scene2.ballVX = scene2.ballSpeed;
  scene2.ballVY = -scene2.ballSpeed;

  scene2.blocks = [];
  scene2.makeBlocks();
};

scene2.makeBlocks = function() {
  scene2.blocks = [];

  let totalRowWidth = scene2.cols * scene2.blockWidth + (scene2.cols - 1) * scene2.blockGap;
  let startX = (width - totalRowWidth) / 2;

  for (let row = 0; row < scene2.rows; row++) {
    for (let col = 0; col < scene2.cols; col++) {
      let block = {
        x: startX + col * (scene2.blockWidth + scene2.blockGap),
        y: scene2.blockTop + row * (scene2.blockHeight + scene2.blockGap),
        w: scene2.blockWidth,
        h: scene2.blockHeight,
        alive: true
      };

      scene2.blocks.push(block);
    }
  }
};

scene2.enter = function() {
  // Only initialize one time if this scene has never been used.
  if (scene2.lives === undefined) {
    scene2.startNewGame();
  }
};

scene2.updatePaddle = function() {
  if (keyIsDown(LEFT_ARROW)) {
    scene2.paddleX = scene2.paddleX - scene2.paddleSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    scene2.paddleX = scene2.paddleX + scene2.paddleSpeed;
  }

  if (scene2.paddleX < 0) {
    scene2.paddleX = 0;
  }

  if (scene2.paddleX + scene2.paddleWidth > width) {
    scene2.paddleX = width - scene2.paddleWidth;
  }
};

scene2.updateBall = function() {
  scene2.ballX = scene2.ballX + scene2.ballVX;
  scene2.ballY = scene2.ballY + scene2.ballVY;

  if (scene2.ballX < scene2.ballSize / 2 || scene2.ballX > width - scene2.ballSize / 2) {
    scene2.ballVX = -scene2.ballVX;
  }

  if (scene2.ballY < scene2.ballSize / 2) {
    scene2.ballVY = -scene2.ballVY;
  }

  let paddleTop = scene2.paddleY;
  let paddleBottom = scene2.paddleY + scene2.paddleHeight;
  let paddleLeft = scene2.paddleX;
  let paddleRight = scene2.paddleX + scene2.paddleWidth;

  let ballBottom = scene2.ballY + scene2.ballSize / 2;
  let ballTop = scene2.ballY - scene2.ballSize / 2;
  let ballLeft = scene2.ballX - scene2.ballSize / 2;
  let ballRight = scene2.ballX + scene2.ballSize / 2;

  let hitPaddle =
    ballBottom >= paddleTop &&
    ballTop <= paddleBottom &&
    ballRight >= paddleLeft &&
    ballLeft <= paddleRight &&
    scene2.ballVY > 0;

  if (hitPaddle) {
    scene2.ballVY = -Math.abs(scene2.ballVY);

    let paddleCenter = scene2.paddleX + scene2.paddleWidth / 2;
    let distanceFromCenter = scene2.ballX - paddleCenter;
    scene2.ballVX = distanceFromCenter * 0.08;
  }

  if (scene2.ballY > height + scene2.ballSize) {
    scene2.lives = scene2.lives - 1;

    if (scene2.lives <= 0) {
      switchScene(scene3);
      return;
    }

    scene2.resetBallAndPaddle();
  }
};

scene2.resetBallAndPaddle = function() {
  scene2.paddleX = width / 2 - scene2.paddleWidth / 2;
  scene2.ballX = width / 2;
  scene2.ballY = scene2.paddleY - scene2.ballSize;

  scene2.ballVX = random([-scene2.ballSpeed, scene2.ballSpeed]);
  scene2.ballVY = -scene2.ballSpeed;
};

scene2.checkBlockCollisions = function() {
  let aliveCount = 0;

  for (let i = 0; i < scene2.blocks.length; i++) {
    let block = scene2.blocks[i];

    if (!block.alive) {
      continue;
    }

    aliveCount = aliveCount + 1;

    let ballBottom = scene2.ballY + scene2.ballSize / 2;
    let ballTop = scene2.ballY - scene2.ballSize / 2;
    let ballLeft = scene2.ballX - scene2.ballSize / 2;
    let ballRight = scene2.ballX + scene2.ballSize / 2;

    let hitBlock =
      ballRight >= block.x &&
      ballLeft <= block.x + block.w &&
      ballBottom >= block.y &&
      ballTop <= block.y + block.h;

    if (hitBlock) {
      block.alive = false;
      scene2.blocksBroken = scene2.blocksBroken + 1;
      scene2.ballVY = -scene2.ballVY;
      aliveCount = aliveCount - 1;
      break;
    }
  }

  if (aliveCount <= 0) {
    switchScene(scene4);
  }
};

scene2.drawBlocks = function() {
  fill(255, 180, 70);

  for (let i = 0; i < scene2.blocks.length; i++) {
    let block = scene2.blocks[i];

    if (block.alive) {
      rect(block.x, block.y, block.w, block.h, 4);
    }
  }
};

scene2.render = function() {
  background(15, 15, 30);

  scene2.updatePaddle();
  scene2.updateBall();
  scene2.checkBlockCollisions();

  noStroke();

  scene2.drawBlocks();

  fill(100, 220, 255);
  rect(scene2.paddleX, scene2.paddleY, scene2.paddleWidth, scene2.paddleHeight, 6);

  fill(255);
  ellipse(scene2.ballX, scene2.ballY, scene2.ballSize, scene2.ballSize);

  textAlign(LEFT, TOP);
  textSize(20);
  text("Lives: " + scene2.lives, 20, 20);
  text("Blocks Broken: " + scene2.blocksBroken, 20, 50);

  textAlign(RIGHT, TOP);
  textSize(16);
  text("Press I for intro", width - 20, 24);

  textAlign(CENTER, CENTER);
};

scene2.keyPressed = function() {
  if (key === "i" || key === "I") {
    switchScene(scene1);
  }

  if (key === "2") {
    switchScene(scene2);
  }
};

scene2.exit = function() {
  // Game data is kept so this scene can persist across switches.
};
