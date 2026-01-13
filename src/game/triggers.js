import { state } from "./gameState";

function stoneAt(x, y) {
  return state.stones.some(s => s.x === x && s.y === y);
}

export function updatePlates() {
  state.plates.forEach(plate => {
    const active =
      (state.player.x === plate.x && state.player.y === plate.y) ||
      stoneAt(plate.x, plate.y);

    state.gates[plate.gateId].open = active;
  });
}
export function checkFinish() {
  const p = state.player;

  const isOnFinish = state.finishTiles.some(
    t => t.x === p.x && t.y === p.y
  );

  if (isOnFinish) {
    state.finished = true;
  }
}