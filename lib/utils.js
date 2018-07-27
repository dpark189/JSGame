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
export const KEY      = { SPACE: 32, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

export const tileToPixel = (tile) => {
  return tile * 32;
};

export const pixelToTile = (pixel) => {

  return Math.floor(pixel/32);
};
