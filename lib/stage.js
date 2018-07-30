import * as GameUtil from './utils.js';
import Animation from './animation.js';

class Stage {
  constructor(data, totalWidth, totalHeight, exit_assets) {
    const colorOpts = { black: '#000000', yellow: '#ECD078', brick: '#D95B43', pink: '#C02942', purple: '#542437', grey: '#333', slate: '#53777A', gold: 'gold' };
    this.state = {
      data: data,
      colors: [colorOpts.yellow, colorOpts.brick, colorOpts.pink, colorOpts.purple, colorOpts.grey]
    };
    this.state.totalWidth = GameUtil.MAP.totalWidth;
    this.state.totalHeight = GameUtil.MAP.totalHeight;
    this.state.tile = GameUtil.TILE;
    this.exitY = undefined;
    this.exitX = undefined;
    this.exit_sprite = exit_assets.exit_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  tick(dt) {
    this.animations.exit.tick();
  }

  getCurrentAnimationFrame() {
    return this.animations.exit.getCurrentFrame();
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages() {
    this.addAnimation("exit", new Animation(this.exit_sprite));
  }

  tileCell(tx,ty) {
    return this.state.data[tx + (ty*this.state.totalWidth)];
  }

  render(ctx, mapTiles) {
    let x;
    let y;
    let cell;
    for(y = 0 ; y < this.state.totalHeight ; y++) {
      for(x = 0 ; x < this.state.totalWidth ; x++) {
        cell = this.tileCell(x, y);
        if (cell !== 0) {
          if (cell === 4) {
            ctx.drawImage(mapTiles.topTile, x * this.state.tile, y * this.state.tile, this.state.tile, this.state.tile);
          } else if (cell === 5 || cell === 3 || cell === 2) {
            ctx.drawImage(mapTiles.middleTile, x * this.state.tile, y * this.state.tile, this.state.tile, this.state.tile);
          } else if (cell === 6) {
            this.exitX = x;
            this.exitY = y;
            ctx.drawImage(this.getCurrentAnimationFrame(), x * this.state.tile - 15, y * this.state.tile - 32, this.state.tile * 2, this.state.tile * 2);
          }
        }
      }
    }
  }
}

export default Stage;
