export const MAP      = { totalWidth: 64, totalHeight: 48 };
export const TILE     = 32;
export const METER    = TILE;
export const GRAVITY  = 9.8 * 6;
export const MAXDX    = 15;
export const MAXDY    = 60;
export const ACCEL    = 0.1;
export const FRICTION = 0.05;
export const IMPULSE  = 1500;
export const COLOR    = { BLACK: '#000000', YELLOW: '#ECD078', BRICK: '#D95B43', PINK: '#C02942', PURPLE: '#542437', GREY: '#333', SLATE: '#53777A', GOLD: 'gold' };
export const COLORS   = [ COLOR.YELLOW, COLOR.BRICK, COLOR.PINK, COLOR.PURPLE, COLOR.GREY ];
export const KEY      = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, Z: 90 };

export const tileToPixel = (tile) => {
  return tile * 32;
};

export const pixelToTile = (pixel) => {

  return Math.floor(pixel/32);
};

export const overlap = (x1, y1, w1, h1, x2, y2, w2, h2) => {
  return !(((x1 + w1 - 1) < x2) ||
           ((x2 + w2 - 1) < x1) ||
           ((y1 + h1 - 1) < y2) ||
           ((y2 + h2 - 1) < y1));
};

export const loadMonsterImages = () => {
  let monster_assets = {
    move_left_sprite: [],
    move_right_sprite: [],
  };

  let frameSpeed = 60;
  let move_left_image;
  let move_right_image;

  for (let i = 1; i <= 4; i++) {
    move_left_image = new Image();
    move_left_image.src = (`./assets/monster_sprite/slime_move_left${i}.png`);
    monster_assets.move_left_sprite.push({
      frame: move_left_image,
      speed: frameSpeed
    });
  }

  for (let i = 1; i <= 4; i++) {
    move_right_image = new Image();
    move_right_image.src = (`./assets/monster_sprite/slime_move_right${i}.png`);
    monster_assets.move_right_sprite.push({
      frame: move_right_image,
      speed: frameSpeed
    });
  }

  return monster_assets;
};

export const loadPlayerImages = () => {
  let player_assets = {
    idle_right_sprite: [],
    idle_left_sprite: [],
    run_left_sprite: [],
    run_right_sprite: [],
    jump_left_sprite: [],
    jump_right_sprite: [],
    fall_left_sprite: [],
    fall_right_sprite: [],
    attack_right_sprite: [],
    attack_left_sprite: [],
    slash_right_sprite: [],
    slash_left_sprite: [],
    death_sprite: []
  };
  let frameSpeed = 90;
  let idle_right_image;
  let idle_left_image;
  let run_left_image;
  let run_right_image;
  let jump_left_image;
  let jump_right_image;
  let fall_right_image;
  let fall_left_image;
  let attack_left_image;
  let attack_right_image,
      slash_left_image,
      slash_right_image,
      death_image;


  for (let i = 1; i <= 2; i++) {
    fall_left_image = new Image();
    fall_left_image.src = (`./assets/player_sprite/fall_left${i}.png`);
    player_assets.fall_left_sprite.push({
      frame: fall_left_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 2; i++) {
    fall_right_image = new Image();
    fall_right_image.src = (`./assets/player_sprite/fall_right${i}.png`);
    player_assets.fall_right_sprite.push({
      frame: fall_right_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 4; i++) {
    idle_right_image = new Image();
    idle_right_image.src = (`./assets/player_sprite/idle_right${i}.png`);
    player_assets.idle_right_sprite.push({
      frame: idle_right_image,
      speed: 90
    });
  }
  for (let i = 1; i <= 4; i++) {
    idle_left_image = new Image();
    idle_left_image.src = (`./assets/player_sprite/idle_left${i}.png`);
    player_assets.idle_left_sprite.push({
      frame: idle_left_image,
      speed: 90
    });
  }
  for (let i = 1; i <= 10; i++) {
    jump_left_image = new Image();
    jump_left_image.src = (`./assets/player_sprite/jump_left${i}.png`);
    player_assets.jump_left_sprite.push({
      frame: jump_left_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 10; i++) {
    jump_right_image = new Image();
    jump_right_image.src = (`./assets/player_sprite/jump_right${i}.png`);
    player_assets.jump_right_sprite.push({
      frame: jump_right_image,
      speed: 60
    });
  }
  for (let i = 1; i <= 6; i++) {
    run_right_image = new Image();
    run_right_image.src = (`./assets/player_sprite/run_right${i}.png`);
    player_assets.run_right_sprite.push({
      frame: run_right_image,
      speed: frameSpeed
    });
  }
  for (let i = 1; i <= 6; i++) {
    run_left_image = new Image();
    run_left_image.src = (`./assets/player_sprite/run_left${i}.png`);
    player_assets.run_left_sprite.push({
      frame: run_left_image,
      speed: frameSpeed
    });
  }
  for (let i = 1; i <= 7; i++) {
    attack_left_image = new Image();
    attack_left_image.src = (`./assets/player_sprite/attack_left${i}.png`);
    player_assets.attack_left_sprite.push({
      frame: attack_left_image,
      speed: 40
    });
  }
  for (let i = 1; i <= 7; i++) {
    attack_right_image = new Image();
    attack_right_image.src = (`./assets/player_sprite/attack_right${i}.png`);
    player_assets.attack_right_sprite.push({
      frame: attack_right_image,
      speed: 40
    });
  }

    slash_left_image = new Image();
    slash_left_image.src = (`./assets/effects/slash_left1.png`);
    player_assets.slash_left_sprite.push(slash_left_image);

    slash_right_image = new Image();
    slash_right_image.src = (`./assets/effects/slash_right1.png`);
    player_assets.slash_right_sprite.push(slash_right_image);

  for (let i = 1; i <= 8; i++) {
    death_image = new Image();
    death_image.src = (`./assets/player_sprite/death${i}.png`);
    player_assets.death_sprite.push({
      frame: death_image,
      speed: 90
    });
  }

  return player_assets;
};

export const loadBackground = () => {
  let background = new Image();
  background.src = ('./assets/background/background.gif');
  return background;
};

export const loadMapTextures = () => {
  const middleTile = new Image();
  middleTile.src = ('./assets/tiles/middle_tile.png');
  const topTile = new Image();
  topTile.src = ('./assets/tiles/top_tile.png');
  const map = {
    middleTile: middleTile,
    topTile: topTile
  };
  return map;
};
