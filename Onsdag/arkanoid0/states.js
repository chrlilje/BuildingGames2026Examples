let gameConfig = {
    blockW: 50,
    blockH: 20
}

let gameObjects = {};

gameObjects.ball = {
    x: 100,
    y: 100,
    vx:1,
    vy:2,
    size:20,
    color:"red"
}

gameObjects.blocks = [];

function createBlocks(){
    for(let i = 0;i<10;i++){
    let blockConfig = {
        x: 10*i+i*gameConfig.blockW,
        y: 20,
        w: gameConfig.blockW,
        h: gameConfig.blockH
    }
    let newBlock = new Block(blockConfig);
    gameObjects.blocks.push(newBlock);
    }

}