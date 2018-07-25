import { level } from './level.js';

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


  function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  function bound(x, min, max) {
    return Math.max(min, Math.min(max, x));
  }

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

  let tileToPixel = function(t)     { return t*TILE;},
      pixelToCell   = function(p)     { return Math.floor(p/TILE);},
      cell          = function(x,y)   { return tileCell(pixelToCell(x),pixelToCell(y));},
      tileCell      = function(tx,ty) { return cells[tx + (ty*MAP.totalWidth)];};

  function render(ctx, frame, dt) {
    ctx.clearRect(0, 0, width, height);
    renderMap(ctx);
  }

  function renderMap(ctx) {
    let x;
    let y;
    let cell;
    for(y = 0 ; y < MAP.totalHeight ; y++) {
      for(x = 0 ; x < MAP.totalWidth ; x++) {
        cell = tileCell(x, y);
        if (cell) {
          ctx.fillStyle = COLORS[cell - 1];
          ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
        }
      }
    }
  }

  function setup(map) {
    let data    = map.layers[0].data;
    let objects = map.layers[1].objects;
    let n;
    let obj;
    let entity;
    cells = data;
  }

  let dt = 0;
  let now;
  let last = timestamp();
  let fpsmeter = new FPSMeter({ decimals: 0, graph: true, theme: 'dark', left: '5px' });

  function frame() {
    fpsmeter.tickStart();
    now = timestamp();
    render(ctx, dt);
    last = now;
    fpsmeter.tick();
    requestAnimationFrame(frame, canvas);
  }

    setup(level);
    frame();

})();
