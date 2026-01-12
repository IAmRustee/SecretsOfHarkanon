import { GRID_SIZE } from "./gameState";

export function move(state, dx, dy) {
  const p = state.player;
  const nx = p.x + dx;
  const ny = p.y + dy;

  if (nx < 0 || ny < 0 || nx >= GRID_SIZE || ny >= GRID_SIZE) return state;

  const stoneIndex = state.stones.findIndex(
    s => s.x === nx && s.y === ny
  );

  if (stoneIndex >= 0) {
    const bx = nx + dx;
    const by = ny + dy;

    if (isFree(state, bx, by)) {
      state.stones[stoneIndex] = { x: bx, y: by };
      state.player = { x: nx, y: ny };
    }
    return { ...state };
  }

  if (isFree(state, nx, ny)) {
    state.player = { x: nx, y: ny };
  }

  return { ...state };
}

function isFree(state, x, y) {
  if (x < 0 || y < 0 || x >= GRID_SIZE || y >= GRID_SIZE) return false;
  if (state.walls.some(w => w.raised && w.x === x && w.y === y)) return false;
  if (state.stones.some(s => s.x === x && s.y === y)) return false;
  return true;
}
