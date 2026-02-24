let stones = [];
let state = {
  holdStone: false,
  stoneSize: 40,
  nextStoneColorIndex:0,
}

let stoneColors = [
    "crimson",
    "royalblue",
    "forestgreen",
    "goldenrod",
    "darkorange",
    "mediumvioletred",
    "turquoise"
];

class Stone {
  constructor(config){
    this.x = config.x;
    this.y = config.y;
    this.vx = config.vx;
    this.vy = config.vy;
    this.size = state.stoneSize;
    this.color = stoneColors[state.nextStoneColorIndex];
  }
}
