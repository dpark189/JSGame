import { level } from './level.js';
import Stage from './lib/stage.js';
import Player from './lib/player.js';
import Monster from './lib/monster.js';
import * as GameUtil from './lib/utils.js';
import SpriteSheet from './assets/sprite_sheet.js';

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

  let tileToPixel   = function(t)     { return t*GameUtil.TILE;};
  let pixelToTile   = function(p)     { return Math.floor(p/GameUtil.TILE);};
  let tileCell      = function(tx,ty) { return cells.state.data[tx + (ty*GameUtil.MAP.totalWidth)];};

  function overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(((x1 + w1 - 1) < x2) ||
           ((x2 + w2 - 1) < x1) ||
           ((y1 + h1 - 1) < y2) ||
           ((y2 + h2 - 1) < y1));
}

  function render(ctx, frame, dt) {
    ctx.clearRect(0, 0, width, height);
    cells.render(ctx);
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
    cells = new Stage(data, GameUtil.MAP.totalWidth, GameUtil.MAP.totalHeight);
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
  }

  function updatePlayer(dt) {
    updateEntity(player, dt);
  }

  function updateMonsters(dt) {
    let max = monsters.length;
    for (let i = 0; i < max; i++) {
      updateMonster(monsters[i], dt);
    }
  }

  function updateMonster(monster, dt) {
    if (!monster.state.dead) {
      updateEntity(monster, dt);
      if (overlap(player.state.x, player.state.y, GameUtil.TILE, GameUtil.TILE, monster.state.x, monster.state.y, GameUtil.TILE, GameUtil.TILE)) {
        if ((player.state.dy > 0) && (monster.state.y - player.state.y > GameUtil.TILE/2)) {
          monster.killed();
          player.state.killed++;

        } else {
          // player.killed();
        }
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

      if (entity.jump && !entity.jumping && !falling) {
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
      let cell = tileCell(tx, ty);
      let cellright = tileCell(tx + 1, ty);
      let celldown  = tileCell(tx,     ty + 1);
      let celldiag  = tileCell(tx + 1, ty + 1);

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
  let fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  function frame() {
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
  }

let fired = false;
  function onKey (e, key, down) {
    switch(key) {
      case GameUtil.KEY.LEFT:
        player.changeState({'left': down});
        e.preventDefault(); return false;
      case GameUtil.KEY.RIGHT:
        player.changeState({'right': down});
        e.preventDefault();
        return false;
      case GameUtil.KEY.SPACE:
        player.changeState({'jump': down});
        e.preventDefault();
        return false;
      case GameUtil.KEY.Z:
        player.attack();
      return false;
    }
  }

// TODO: figure out how to stop holding down space bar from triggering jump

  document.addEventListener('keydown', function(ev) {
    return onKey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) { return onKey(ev, ev.keyCode, false); }, false);

    setup(level);
    frame();

})();
