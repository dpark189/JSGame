import * as GameUtil from './utils';
import Animation from './animation.js';

class Monster {
  constructor(entity, monster_assets){
    this.state = entity;
    this.state.maxdx = entity.maxdx/2;
    this.state.falling = true;
    this.state.dead = false;
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
    this.move_left_sprite = monster_assets.move_left_sprite;
    this.move_right_sprite = monster_assets.move_right_sprite;
    this.dying_sprite = monster_assets.dying_sprite;
    this.dead_sprite = monster_assets.dead_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages() {
    this.addAnimation("move_left", new Animation(this.move_left_sprite));
    this.addAnimation("move_right", new Animation(this.move_right_sprite));
    this.addAnimation('dying', new Animation(this.dying_sprite));
    this.addAnimation('dead', new Animation(this.dead_sprite));
  }

  getCurrentAnimationFrame() {
    if (this.state.dying) {
      return this.animations.dying.getCurrentFrame();
    } else if (this.state.left) {
      return this.animations.move_left.getCurrentFrame();
    } else if (this.state.right) {
      return this.animations.move_right.getCurrentFrame();
    }
  }

  tick(dt) {
    this.animations.move_left.tick();
    this.animations.move_right.tick();
    this.animations.dying.deathTick(this);
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  killed () {
    this.state.dying = true;
  }

  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 15, this.state.y - 30, GameUtil.TILE * 2, GameUtil.TILE * 2);
  }
}

export default Monster;
