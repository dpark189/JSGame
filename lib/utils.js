export const tileToPixel = (tile) => {
  return tile * 32;
};

export const pixelToTile = (pixel) => {
  return Math.floor(pixel/32);
};
