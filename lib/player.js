import * as GameUtil from './utils';
import Animation from './animation.js';

class Player {
  constructor(entity, player_assets){
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
    this.idle_sprite = player_assets.idle_sprite;
    this.run_left_sprite = player_assets.run_left_sprite;
    this.run_right_sprite = player_assets.run_right_sprite;
    this.jump_left_sprite = player_assets.jump_left_sprite;
    this.jump_right_sprite = player_assets.jump_right_sprite;
    this.fall_right_sprite = player_assets.fall_right_sprite;
    this.fall_left_sprite = player_assets.fall_left_sprite;
    this.animations = {};
    this.loadImages();
    this.addAnimation = this.addAnimation.bind(this);
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  tick(dt) {
    this.animations.idle.tick();
    this.animations.run_left.tick();
    this.animations.run_right.tick();
    this.animations.jump_left.tick();
    this.animations.jump_right.tick();
  }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages () {
    this.addAnimation("idle", new Animation(this.idle_sprite));
    this.addAnimation("run_left", new Animation(this.run_left_sprite));
    this.addAnimation("run_right", new Animation(this.run_right_sprite));
    this.addAnimation("jump_left", new Animation(this.jump_left_sprite));
    this.addAnimation("jump_right", new Animation(this.jump_right_sprite));
    this.addAnimation("fall_right", new Animation(this.fall_right_sprite));
    this.addAnimation("fall_left", new Animation(this.fall_left_sprite));
  }


  getCurrentAnimationFrame() {
    if ((this.state.jumping) && (this.state.right)) {

      return this.animations.jump_right.getCurrentFrame();

    } else if ((this.state.jumping) && (this.state.left)) {

      return this.animations.jump_left.getCurrentFrame();

    } else if (this.state.jumping) {

      return this.animations.jump_right.getCurrentFrame();

    } else if (this.state.falling && this.state.right) {

      return this.animations.fall_right.getCurrentFrame();

    } else if (this.state.falling && this.state.left) {

      return this.animations.fall_left.getCurrentFrame();

    } else if (this.state.falling && !this.state.jumping) {

      return this.animations.fall_right.getCurrentFrame();

    }  else if (this.state.left) {

      return this.animations.run_left.getCurrentFrame();

    } else if (this.state.right) {

      return this.animations.run_right.getCurrentFrame();

    }  else {

      return this.animations.idle.getCurrentFrame();

    }
  }

  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 30, this.state.y - 60, GameUtil.TILE * 3, GameUtil.TILE * 3);
    // ctx.fillRect(this.state.x, this.state.y, GameUtil.TILE, GameUtil.TILE);
  }
}

export default Player;
