export const TILE = 16;
export const MAP_SIZE = 256;
export const GRID_SIZE = MAP_SIZE / TILE;

export const initialState = {
  player: { x: 2, y: 2 },
  stones: [{ x: 4, y: 6 }],
  plates: [{ x: 10, y: 8 }],
  walls: [{ x: 10, y: 4, raised: false }],
  dead: false
};
