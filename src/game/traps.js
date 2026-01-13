import { state } from "./gameState";

export function trapAt(x, y) {
  return state.traps.find(t => t.x === x && t.y === y);
}
