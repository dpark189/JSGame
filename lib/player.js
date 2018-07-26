import * as GameUtil from './utils';

class Player {
  constructor(entity, color){
    this.state = entity;
    this.state.color = color;
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

  updatePos(dt) {
    if (this.state.left) {
      this.state.ddx = this.state.ddx - GameUtil.ACCEL;
    }
    else if (this.state.wasLeft) {
      this.state.ddx = this.state.ddx + GameUtil.FRICTION;
    }

    if (this.state.right) {
      this.state.ddx = this.state.ddx + GameUtil.ACCEL;
    } else if (this.state.wasRight) {
      this.state.ddx = this.state.ddx + GameUtil.FRICTION;
    }

    if (this.state.jump && !this.state.jumping && !this.state.falling) {
      this.state.ddy = this.state.ddy - this.state.jump;
      this.state.jumping = true;
    }

// ------------ update position with new velocity

    this.state.x = this.state.x + (dt * this.state.dx);
    this.state.y = this.state.y + (dt * this.state.dy);
    this.state.dx = this.bound(this.state.dx + (dt * this.state.ddx), - this.state.maxdx, this.state.maxdx);
    this.state.dy = this.bound(this.state.dy + (dt * this.state.ddy), - this.state.maxdy, this.state.maxdy);

    if ((this.state.wasLeft && (this.state.dx > 0)) || (this.state.wasRight && (this.state.dx < 0))) {
      this.state.dx = 0;
    }
  }

  render(ctx, dt) {
    ctx.fillStyle = '#ECD078';
    ctx.fillRect(this.state.x + (this.state.dx * dt), this.state.y + (this.state.dy * dt), GameUtil.TILE, GameUtil.TILE);
  }
}

export default Player;
