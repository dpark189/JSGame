import * as GameUtil from './utils';
import Animation from './animation.js';

class Player {
  constructor(entity, player_assets){
    this.state = entity;
    this.state.attacking = false;
    this.state.facing = true;
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
    this.idle_right_sprite = player_assets.idle_right_sprite;
    this.idle_left_sprite = player_assets.idle_left_sprite;
    this.run_left_sprite = player_assets.run_left_sprite;
    this.run_right_sprite = player_assets.run_right_sprite;
    this.jump_left_sprite = player_assets.jump_left_sprite;
    this.jump_right_sprite = player_assets.jump_right_sprite;
    this.fall_right_sprite = player_assets.fall_right_sprite;
    this.fall_left_sprite = player_assets.fall_left_sprite;
    this.attack_left_sprite = player_assets.attack_left_sprite;
    this.attack_right_sprite = player_assets.attack_right_sprite;
    this.animations = {};
    this.addAnimation = this.addAnimation.bind(this);
    this.loadImages();
  }

  bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  tick(dt) {
    this.animations.idle_right.tick();
    this.animations.idle_left.tick();
    this.animations.run_left.tick();
    this.animations.run_right.tick();
    this.animations.jump_left.tick();
    this.animations.jump_right.tick();
    this.animations.attack_left.attackTick(this);
    this.animations.attack_right.attackTick(this);
  }

  // attackTick(dt) {
  //   if (this.state.facing){
  //     this.animations.attack_right.attackTick(this);
  //   } else {
  //     this.animations.attack_left.attackTick(this);
  //   }
  // }

  addAnimation(name, animation) {
    this.animations[name] = animation;
  }

  loadImages () {
    this.addAnimation("idle_right", new Animation(this.idle_right_sprite));
    this.addAnimation("idle_left", new Animation(this.idle_left_sprite));
    this.addAnimation("run_left", new Animation(this.run_left_sprite));
    this.addAnimation("run_right", new Animation(this.run_right_sprite));
    this.addAnimation("jump_left", new Animation(this.jump_left_sprite));
    this.addAnimation("jump_right", new Animation(this.jump_right_sprite));
    this.addAnimation("fall_right", new Animation(this.fall_right_sprite));
    this.addAnimation("fall_left", new Animation(this.fall_left_sprite));
    this.addAnimation("attack_left", new Animation(this.attack_left_sprite));
    this.addAnimation("attack_right", new Animation(this.attack_right_sprite));
  }

  attack() {
    this.state.attack = true;
  }

  stopAttack() {
    this.state.attack = false;
  }

  getCurrentAnimationFrame() {
    if (this.state.attacking) {
      if (this.state.facing) {
        return this.animations.attack_right.getCurrentFrame();
      } else if (!this.state.facing){
        return this.animations.attack_left.getCurrentFrame();
      }
    } else if ((this.state.jumping) && (this.state.facing)) {
      return this.animations.jump_right.getCurrentFrame();
    } else if ((this.state.jumping) && (!this.state.facing)) {
      return this.animations.jump_left.getCurrentFrame();
    } else if ((this.state.falling && this.state.facing) || (this.state.falling && this.state.dx > 0)) {
      return this.animations.fall_right.getCurrentFrame();
    } else if ((this.state.falling && !this.state.facing) || (this.state.falling && this.state.dx < 0)) {
      return this.animations.fall_left.getCurrentFrame();
    } else if (this.state.falling &&
      !this.state.jumping &&
      !this.state.left &&
      !this.state.right) {
      return this.animations.fall_right.getCurrentFrame();
    }  else if (this.state.left) {
      return this.animations.run_left.getCurrentFrame();
    } else if (this.state.right) {
      return this.animations.run_right.getCurrentFrame();
    }  else {
      if (this.state.facing){
        return this.animations.idle_right.getCurrentFrame();
      } else if (!this.state.facing) {
        return this.animations.idle_left.getCurrentFrame();
      }
    }
  }


  changeState(obj){
    Object.keys(obj).forEach( key => {
      this.state[`${key}`] = obj[key];
    });
  }

  render(ctx, dt) {
    if (!this.state.attacking){
      ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 65, this.state.y - 60, GameUtil.TILE * 5, GameUtil.TILE * 3);
      // ctx.alpha = 0.2;
      // ctx.fillStyle = '#ECD078';
      // ctx.fillRect(this.state.x, this.state.y, GameUtil.TILE * 3, GameUtil.TILE);
    } else if (this.state.attacking) {
      ctx.drawImage(this.getCurrentAnimationFrame(), this.state.x - 65, this.state.y - 60, GameUtil.TILE * 5 + 1, GameUtil.TILE * 3);
      // ctx.alpha = 0.2;
      // ctx.fillStyle = '#ECD078';
      // ctx.fillRect(this.state.x, this.state.y, GameUtil.TILE * 3, GameUtil.TILE);
    }
  }
}

export default Player;
