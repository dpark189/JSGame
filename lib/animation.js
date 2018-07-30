
class Animation {
  constructor(frames) {
    this.frames = frames;
    this.index = 0;
    this.lastTime = this.timestamp();
    this.timer = 0;
    this.speed;
  }

  tick () {
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        this.index = 0;
      }
    }
  }

  timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  attackTick(player) {
    const pl = player;
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        pl.changeState({'attacking': false});
        this.index = 0;
      }
    }
  }

  deathTick(player) {
    this.timer += this.timestamp() - this.lastTime;
    this.lastTime = this.timestamp();
    if (this.timer > this.speed) {
      this.index++;
      this.timer = 0;
      if (this.index >= this.frames.length) {
        player.changeState({
          'dead': true,
          'dying': false
        });
        this.index = 0;
      }
    }
  }

  getCurrentFrame(){
    this.speed = this.frames[this.index].speed;
    return this.frames[this.index].frame;
  }
}

export default Animation;
