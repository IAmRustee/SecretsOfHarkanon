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
