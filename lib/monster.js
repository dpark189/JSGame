import * as GameUtil from './utils';

class Monster {
  constructor(entity){
    this.state = entity;
    this.state.falling = true;
    this.state.jumping = false;
    this.state.jump = false;
    this.state.friction = entity.friction * (this.state.falling ? 0.5 : 1);
    this.state.accel = entity.accel * (this.state.falling ? 0.5: 1);
    this.state.ddx = 0;
    this.state.ddy = entity.gravity;
    this.state.wasLeft = this.state.dx < 0;
    this.state.wasRight = this.state.dx > 0;
    this.state.nY = this.state.x % 32;
    this.state.nX = this.state.y & 32;
    this.state.tileX = GameUtil.pixelToTile(this.state.x);
    this.state.tileY = GameUtil.pixelToTile(this.state.y);
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    // debugger
    // ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 65, this.state.y - 60, GameUtil.TILE * 5, GameUtil.TILE * 3);
    ctx.fillStyle = GameUtil.COLOR.SLATE;
    ctx.fillRect(this.state.x, this.state.y, this.state.width, this.state.height);
  }
}

export default Monster;
