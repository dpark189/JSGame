
class MainMenu {
  constructor (playing) {
    this.playing = playing;
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(){
    this.playing = true;
  }

  render() {
    const buttons = "<section>" + "<button className='play-button' onClick={this.handlePlay}>" + "play" + "</button>" + "</section>";
    return buttons;
  }
}

export default MainMenu;
