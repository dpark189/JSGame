import { level } from './level.js';
import Stage from './lib/stage.js';
import Player from './lib/player.js';
import Monster from './lib/monster.js';
import * as GameUtil from './lib/utils.js';
import SpriteSheet from './assets/sprite_sheet.js';
import MainMenu from './lib/main_menu.js';
import gameSound from './lib/sound.js';

(() => {

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame    ||
                                   window.oRequestAnimationFrame      ||
                                   window.msRequestAnimationFrame     ||
                                   function(callback, element) {
                                     window.setTimeout(callback, 1000 / 60);
                                   };
  }

  const player_assets = GameUtil.loadPlayerImages();
  const monster_assets = GameUtil.loadMonsterImages();
  const background = GameUtil.loadBackground();
  const mapTiles = GameUtil.loadMapTextures();
  const exit_assets = GameUtil.loadExit();
  const mainMenuFigures = GameUtil.loadMainMenuBackground();
  const mainMenuMusic = new Audio('./assets/sound/Zabutom_-_Sine_ride.mp3');
  const playingMusic = new Audio('./assets/sound/Breakbeat_Heartbeat_Refract.mp3');
  playingMusic.volume = 0.2;
  let currentMusic;

  function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  function bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

  let fps      = 60;
  let step     = 1/fps;
  let canvas   = document.getElementById('canvas');
  let ctx      = canvas.getContext('2d');
  let width    = canvas.width  = GameUtil.MAP.totalWidth * GameUtil.TILE;
  let height   = canvas.height = GameUtil.MAP.totalHeight * GameUtil.TILE;
  let player   = {};
  let monsters = [];
  let treasure = [];
  let cells    = [];
  const playButton = document.getElementById('play-button');
  const mainMenu = document.getElementById('main-menu');
  const gameOver = document.getElementById('game-over');
  const retryButton = document.getElementById('retry-button');
  const playAgainButton = document.getElementById('play-again');
  const winScreen = document.getElementById('win-screen');
  const platformerDiv = document.getElementById('platformer');
  const toggleAudioButton = document.getElementById('toggle-audio-button');
  const mainMenuToggleAudioButton = document.getElementById('main-menu-toggle-audio-button');
  let playing = false;
  let win = false;
  let audioAllowed = false;
  const menuMusic = new gameSound(platformerDiv, mainMenuMusic);
  menuMusic.playbackRate = 0.7;
  const tileToPixel   = (t) =>     { return t*GameUtil.TILE;};
  const pixelToTile   = (p) =>     { return Math.floor(p/GameUtil.TILE);};
  const tileCell      = (tx,ty) => { return cells.state.data[tx + (ty*GameUtil.MAP.totalWidth)];};

  mainMenuFigures.forEach( figure => {
    mainMenu.appendChild(figure);
  });

  function overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(((x1 + w1 - 1) < x2) ||
           ((x2 + w2 - 1) < x1) ||
           ((y1 + h1 - 1) < y2) ||
           ((y2 + h2 - 1) < y1));
}

  function render(ctx, frame, dt) {
    ctx.clearRect(0, 0, width, height);
    cells.render(ctx, mapTiles);
    player.render(ctx, dt);
    renderMonsters(ctx, dt);
  }

  function setup(map) {
    let data    = map.layers[0].data;
    let objects = map.layers[1].objects;
    let n;
    let obj;
    let entity;
    let monster;
    cells = new Stage(data, GameUtil.MAP.totalWidth, GameUtil.MAP.totalHeight, exit_assets);
    for(n = 0 ; n < objects.length ; n++) {
      obj = objects[n];
      entity = setupEntity(obj);
      switch(obj.type) {
      case "player":
        player = new Player(entity, player_assets);
      break;
      case "monster":
        monster = new Monster(entity, monster_assets);
        monsters.push(monster);
      break;
      }
    }
  }

  function renderMonsters(ctx, dt) {
    let max = monsters.length;
    let monster;
    for (let i = 0; i < max; i++) {
      monster = monsters[i];
      if (!monster.state.dead){
        monster.render(ctx, dt);
      }
    }
  }

  function setupEntity(obj) {

    let entity = {};
    entity.x        = obj.x;
    entity.y        = obj.y;
    entity.dx       = 0;
    entity.dy       = 0;
    entity.width    = obj.width;
    entity.height    = obj.height;
    entity.gravity  = GameUtil.METER * (GameUtil.GRAVITY);
    entity.maxdx    = GameUtil.METER * (GameUtil.MAXDX);
    entity.maxdy    = GameUtil.METER * (GameUtil.MAXDY);
    entity.impulse  = GameUtil.METER * (obj.properties.impulse || GameUtil.IMPULSE);
    entity.accel    = entity.maxdx / (obj.properties.accel    || GameUtil.ACCEL);
    entity.friction = entity.maxdx / (obj.properties.friction || GameUtil.FRICTION);
    entity.player   = obj.type == "player";
    entity.monster   = obj.type == "monster";
    entity.left     = obj.properties.left;
    entity.right    = obj.properties.right;
    entity.start    = { x: obj.x, y: obj.y };
    entity.killed = entity.collected = 0;
    return entity;
  }

  function update(dt) {
    updatePlayer(dt);
    updateMonsters(dt);
    cells.tick();
  }

  function updatePlayer(dt) {
    if (typeof cells.exitX !== 'undefined') {

      if (overlap(pixelToTile(player.state.x), pixelToTile(player.state.y), 1, 1, cells.exitX, cells.exitY, 1, 1)) {

        win = true;
      }
    }
    if (!player.state.dead) {
      updateEntity(player, dt);
    } else {
      player.render(ctx, dt);
    }
  }

  function updateMonsters(dt) {
    let max = monsters.length;
    for (let i = 0; i < max; i++) {
      updateMonster(monsters[i], dt);
    }
  }
// 1053.3333333333337
// ) ||
// (
//   (player.state.attacking && player.state.facing) &&
//   (monster.state.x - player.state.x < GameUtil.TILE * 3)
// ) ||
// (
//   (player.state.attacking && !player.state.facing) &&
//   (player.state.x - monster.state.x < GameUtil.TILE * 3)
// )
// ) {
  function updateMonster(monster, dt) {
    if (!monster.state.dead || !monster.state.dying) {
      updateEntity(monster, dt);
      if (overlap(player.state.x, player.state.y, GameUtil.TILE, GameUtil.TILE, monster.state.x, monster.state.y, GameUtil.TILE, GameUtil.TILE)) {
        if ((player.state.dy > 0) && (monster.state.y - player.state.y > GameUtil.TILE/2)) {
          monster.killed();
          player.state.killed++;
        } else {
          if (monster.state.dying || monster.state.dead){}
          else {
            player.killPlayer();
          }
        }
      }
      if (
          (
            (Math.abs(player.state.y - monster.state.y) < GameUtil.TILE * 2) &&
            (player.state.attacking && player.state.facing) &&
            (
              (monster.state.x - player.state.x < GameUtil.TILE * 3) &&
              (monster.state.x - player.state.x > 0)
            )
          ) ||
          (
            (Math.abs(player.state.y - monster.state.y) < GameUtil.TILE * 2) &&
            (player.state.attacking && !player.state.facing) &&
            (
              (player.state.x - monster.state.x < GameUtil.TILE * 3) &&
              (player.state.x - monster.state.x > 0)
            )
          )
        ) {

          monster.killed();
          player.state.killed++;
        }
    }
  }

  function updateEntity(object, dt) {
    let entity = object.state;
    let wasLeft = entity.dx  < 0;
    let wasRight = entity.dx  > 0;
    let falling = entity.falling;
    let friction = entity.friction * (falling ? 0.5 : 1);
    let accel = entity.accel    * (falling ? 0.5 : 1);
    let attacking = entity.attacking;

      entity.ddx = 0;
      entity.ddy = entity.gravity;

      if (entity.left)
        entity.ddx = entity.ddx - accel;
      else if (wasLeft)
        entity.ddx = entity.ddx + friction;

      if (entity.right)
        entity.ddx = entity.ddx + accel;
      else if (wasRight)
        entity.ddx = entity.ddx - friction;

      if (entity.jump && !entity.jumping && !entity.falling && entity.jumpCount === 0) {
        entity.jumpCount += 1;
        entity.ddy = entity.ddy - entity.impulse;
        entity.jumping = true;
      }

      entity.x  = entity.x  + (dt * entity.dx);
      entity.y  = entity.y  + (dt * entity.dy);
      entity.dx = bound(entity.dx + (dt * entity.ddx), -entity.maxdx, entity.maxdx);
      entity.dy = bound(entity.dy + (dt * entity.ddy), -entity.maxdy, entity.maxdy);

      if ((wasLeft  && (entity.dx > 0)) ||
          (wasRight && (entity.dx < 0))) {
        entity.dx = 0;
      }

      let tx = pixelToTile(entity.x);
      let ty = pixelToTile(entity.y);
      let nx = entity.x%GameUtil.TILE;
      let ny = entity.y%GameUtil.TILE;
      let cell = tileCell(tx, ty) === 6 ? 0 : tileCell(tx, ty);
      let cellright = tileCell(tx + 1, ty) === 6 ? 0 : tileCell(tx + 1, ty);
      let celldown  = tileCell(tx,     ty + 1) === 6 ? 0 : tileCell(tx,     ty + 1);
      let celldiag  = tileCell(tx + 1, ty + 1) === 6 ? 0 : tileCell(tx + 1, ty + 1);

      if (entity.dy > 0) {
        if ((celldown && !cell) ||
            (celldiag && !cellright && nx)) {
          entity.y = tileToPixel(ty);
          entity.dy = 0;
          entity.falling = false;
          entity.jumping = false;
          ny = 0;
        }
      }
      else if (entity.dy < 0) {
        if ((cell      && !celldown) ||
            (cellright && !celldiag && nx)) {
          entity.y = tileToPixel(ty + 1);
          entity.dy = 0;
          cell      = celldown;
          cellright = celldiag;
          ny        = 0;
        }
      }

      if (entity.dx > 0) {
        if ((cellright && !cell) ||
            (celldiag  && !celldown && ny)) {
          entity.x = tileToPixel(tx);
          entity.dx = 0;
        }
      }
      else if (entity.dx < 0) {
        if ((cell     && !cellright) ||
            (celldown && !celldiag && ny)) {
          entity.x = tileToPixel(tx + 1);
          entity.dx = 0;
        }
      }

      if (entity.monster) {
        if (entity.left && (cell || !celldown)) {
          entity.left = false;
          entity.right = true;
        }
        else if (entity.right && (cellright || !celldiag)) {
          entity.right = false;
          entity.left  = true;
        }
      }

      object.tick();

      entity.falling = ! (celldown || (nx && celldiag));
    }

  let dt = 0;
  let now;
  let last = timestamp();
  let fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', right: '5px' });

  function frame() {
    const mainMenu = new MainMenu(playing);
    if (win) {
      winScreen.style.display = "flex";
    }
    else if (player.state.dead) {
      gameOver.style.display = "flex";
    } else if (playing) {
      currentMusic = playingMusic;
      canvas.style.backgroundImage = `url(${background.src})`;
      canvas.style.backgroundSize = 'cover';
      fpsmeter.tickStart();
      now = timestamp();
      dt += Math.min(1, (now - last) / 1000);
      while (dt > step) {
        dt -= step;
        update(step);
      }
      render(ctx, dt);
      last = now;
      fpsmeter.tick();
      requestAnimationFrame(frame, canvas);
    } else if (playing === false && !player.state.dead){
      currentMusic = mainMenuMusic;
      canvas.style.background = "none";
    }
  }

  function onKey (e, key, down) {
    if ((typeof player === "undefined") || (!player.state.dead)){
      switch(key) {
        case GameUtil.KEY.LEFT:
        player.changeState({'left': down, 'facing': false});
        e.preventDefault(); return false;
        case GameUtil.KEY.RIGHT:
        player.changeState({'right': down, 'facing': true});
        e.preventDefault();
        return false;
        case GameUtil.KEY.SPACE:
          let jumpCount = down ? player.state.jumpCount : 0;
          player.changeState({
            'jump': down,
            'jumpCount': jumpCount,
          });
        e.preventDefault();
        return false;
        case GameUtil.KEY.Z:
        if (!player.state.attacking) {
          player.changeState({'attacking': true});
        }
        return false;
      }
    }
  }

  function play(e) {
    return (e) => {
      playing = true;
      currentMusic.pause();
      if (audioAllowed) {
        playingMusic.play();
      }
      mainMenu.visibility = "hidden";
      mainMenu.opacity = "0";
      setTimeout(() => {mainMenu.style.display = "none";}, 2000);
      frame();
    };
  }

  function restartPlay(){
    return (e) => {
      if (win === true) {
        win = false;
        winScreen.style.display = "none";
      }
      player = {};
      monsters = [];
      treasure = [];
      cells    = [];
      gameOver.style.display = "none";
      setup(level);
      frame();
    };
  }

  function toggleAudio(){
    return (e) => {
      audioAllowed = !audioAllowed;
      if (audioAllowed) {
        currentMusic.play();
      } else {currentMusic.pause();}
    };
  }

  // function mainMenuToggle(){
  //   return(e) => {
  //     audioAllowed = !audioAllowed;
  //     if (audioAllowed){
  //       mainMenuMusic.play();
  //     }
  //     else {
  //       mainMenuMusic.stop();
  //     }
  //   };
  // }

  document.addEventListener('keydown', function(ev) {
      return onKey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) {
    return onKey(ev, ev.keyCode, false);   }, false);
  playButton.addEventListener('click', play());
  retryButton.addEventListener('click', restartPlay());
  playAgainButton.addEventListener('click', restartPlay());
  toggleAudioButton.addEventListener('click', toggleAudio());
  // mainMenuToggleAudioButton.addEventListener('click', mainMenuToggle());

    setup(level);
    frame();

})();
