class gameSound {
  constructor(el, audio){
    this.sound = audio;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.loop = true;
    el.appendChild(this.sound);
    this.playing = false;
  }

  play() {
    this.sound.play();
    this.playing = true;
  }

  stopPlay() {
    this.sound.pause();
    this.playing = false;
  }
}

export default gameSound;
