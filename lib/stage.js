import * as GameUtil from './utils.js';

class Stage {
  constructor(data, totalWidth, totalHeight, player) {
    const colorOpts = { black: '#000000', yellow: '#ECD078', brick: '#D95B43', pink: '#C02942', purple: '#542437', grey: '#333', slate: '#53777A', gold: 'gold' };
    this.state = {
      data: data,
      colors: [colorOpts.yellow, colorOpts.brick, colorOpts.pink, colorOpts.purple, colorOpts.grey]
    };
    this.state.totalWidth = GameUtil.MAP.totalWidth;
    this.state.totalHeight = GameUtil.MAP.totalHeight;
    this.state.tile = GameUtil.TILE;
    this.player = player;
  }

  tileCell(tx,ty) {
    return this.state.data[tx + (ty*this.state.totalWidth)];
  }

  render(ctx) {
    let x;
    let y;
    let cell;
    for(y = 0 ; y < this.state.totalHeight ; y++) {
      for(x = 0 ; x < this.state.totalWidth ; x++) {
        cell = this.tileCell(x, y);
        if (cell !== 0) {
            ctx.fillStyle = this.state.colors[cell - 1];
            ctx.fillRect(x * this.state.tile, y * this.state.tile, this.state.tile, this.state.tile);
        }
      }
    }
  }
}

export default Stage;
