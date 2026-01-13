import { state } from "./gameState";

const DIR = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function stoneAt(x, y) {
  return state.stones.find(s => s.x === x && s.y === y);
}

function wallAt(x, y) {
  if (state.map[y][x] === "#") return true;
  return state.gates.some(g => !g.open && g.x === x && g.y === y);
}

function updatePlates() {
  state.plates.forEach(p => {
    const active =
      (state.player.x === p.x && state.player.y === p.y) ||
      stoneAt(p.x, p.y);

    state.gates[p.gateId].open = active;
  });
}

export function movePlayer(dx, dy) {
  const p = state.player;

  if (dx === 1) p.dir = "right";
  if (dx === -1) p.dir = "left";

  const nx = p.x + dx;
  const ny = p.y + dy;

  if (wallAt(nx, ny)) return;

  const frontStone = stoneAt(nx, ny);

  // PUSH
  if (frontStone) {
    const sx = frontStone.x + dx;
    const sy = frontStone.y + dy;
    if (wallAt(sx, sy) || stoneAt(sx, sy)) return;
    frontStone.x = sx;
    frontStone.y = sy;
  }

  // PULL (uses last horizontal direction, which is what we want)
  const back = DIR[p.dir];
  const bx = p.x - back.x;
  const by = p.y - back.y;
  const backStone = stoneAt(bx, by);

  if (backStone && !frontStone) {
    backStone.x = p.x;
    backStone.y = p.y;
  }

  p.x = nx;
  p.y = ny;

  updatePlates();
}