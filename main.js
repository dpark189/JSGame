import { level } from './level.js';
import Stage from './lib/stage.js';
import Player from './lib/player.js';

(() => {

  const MAP      = { totalWidth: 64, totalHeight: 48 };
  const TILE     = 32;
  const METER    = TILE;
  const GRAVITY  = 9.8 * 6;
  const MAXDX    = 15;
  const MAXDY    = 60;
  const ACCEL    = 1/2;
  const FRICTION = 1/6;
  const JUMP  = 1500;
  const COLOR    = { BLACK: '#000000', YELLOW: '#ECD078', BRICK: '#D95B43', PINK: '#C02942', PURPLE: '#542437', GREY: '#333', SLATE: '#53777A', GOLD: 'gold' };
  const COLORS   = [ COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY ];
  const KEY      = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame    ||
                                   window.oRequestAnimationFrame      ||
                                   window.msRequestAnimationFrame     ||
                                   function(callback, element) {
                                     window.setTimeout(callback, 1000 / 60);
                                   };
  }


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
  let width    = canvas.width  = MAP.totalWidth * TILE;
  let height   = canvas.height = MAP.totalHeight * TILE;
  let player   = {};
  let monsters = [];
  let treasure = [];
  let cells    = [];

  let tileToPixel = function(t)     { return t*TILE;};
  let pixelToTile   = function(p)     { return Math.floor(p/TILE);};
  let tileCell      = function(tx,ty) { return cells.state.data[tx + (ty*MAP.totalWidth)];};

  function render(ctx, frame, dt) {
    ctx.clearRect(0, 0, width, height);
    cells.render(ctx);
    renderPlayer(player, ctx, dt);
  }

  function renderPlayer(player, ctx, dt) {
    ctx.fillStyle = COLOR.YELLOW;
    ctx.fillRect(player.state.x + (player.state.dx * dt), player.state.y + (player.state.dy * dt), TILE, TILE);
  }

  function setup(map) {
    let data    = map.layers[0].data;
    let objects = map.layers[1].objects;
    let n;
    let obj;
    let entity;
    cells = new Stage(data, MAP.totalWidth, MAP.totalHeight);
    for(n = 0 ; n < objects.length ; n++) {
      obj = objects[n];
      entity = setupEntity(obj);
      switch(obj.type) {
      case "player":
        player = new Player(entity, COLOR.YELLOW);
      break;
      }
    }
  }

  function setupEntity(obj) {
    let entity = {};
    entity.x        = obj.x;
    entity.y        = obj.y;
    entity.dx       = 0;
    entity.dy       = 0;
    entity.gravity  = METER * (GRAVITY);
    entity.maxdx    = METER * (MAXDX);
    entity.maxdy    = METER * (MAXDY);
    entity.jump  = METER * (obj.properties.jump || JUMP);
    entity.accel    = entity.maxdx / (obj.properties.accel    || ACCEL);
    entity.friction = entity.maxdx / (obj.properties.friction || FRICTION);
    entity.player   = obj.type == "player";
    entity.left     = obj.properties.left;
    entity.right    = obj.properties.right;
    entity.start    = { x: obj.x, y: obj.y };
    entity.killed = entity.collected = 0;
    return entity;
  }

  function update(dt) {
    updatePlayer(dt);
  }

  function updatePlayer(dt) {

    player.updatePos(dt);
    checkCollision(player, dt);
  }

  function checkCollision(obj, dt) {
    let cell = tileCell(obj.state.tileX, obj.state.tileY);
    let cellBelow = tileCell(obj.state.tileX, obj.state.tileY + 1);
    let cellRight = tileCell(obj.state.tileX + 1, obj.state.tileY);
    let cellDiag = tileCell(obj.state.tileX + 1, obj.state.tileY + 1);

// ----- landing on cell, standing on a cell, no cell right, overlapping next tile
    if (obj.state.dy > 0) {
      if ((cellBelow && !cell) || (cellDiag && !cellRight && nX)) {
        obj.changeState({
          'y': tileToPixel(tileY),
          'dy': 0,
          'falling': false,
          'jumping': false,
          'nY': 0
        });
      }
    } else if (obj.state.dy < 0) {
      if ((cell && !cellBelow) || (cellRight && !cellDiag && nX)) {
        obj.changeState({
          'y': tileToPixel(obj.state.tileY + 1),
          'dy': 0,
          'nY': 0
        });
        cell      = cellBelow;
        cellRight = cellDiag;
      }
    }

    if (obj.state.dx > 0) {
      if ((cellRight && !cell) || (cellDiag  && !cellBelow && obj.state.ny)) {
        obj.changeState({
          'x': tileToPixel(obj.state.tileX),
          'dx': 0
        });
      }
    }
    else if (obj.state.dx < 0) {
      if ((cell     && !cellRight) || (cellBelow && !cellDiag && obj.state.nY)) {
        obj.changeState({
          'x': tileToPixel(tileX + 1),
          'dx': 0
        });
      }
    }
    obj.changeState({'falling': !(cellBelow || (obj.state.nX && cellDiag))});
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

  function onKey (e, key, down) {

    switch(key) {
      case KEY.LEFT:
        player.changeState({'left': down});
        e.preventDefault(); return false;
      case KEY.RIGHT:
        player.changeState({'right': down});
        e.preventDefault();
        return false;
      case KEY.SPACE:
        player.changeState({'jump': down});
        ev.preventDefault();
        return false;
    }
  }

  document.addEventListener('keydown', function(ev) { return onKey(ev, ev.keyCode, true);  }, false);
  document.addEventListener('keyup',   function(ev) { return onKey(ev, ev.keyCode, false); }, false);

    setup(level);
    frame();

})();
