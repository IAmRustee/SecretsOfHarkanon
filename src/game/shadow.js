import { state } from "./gameState";

export function isInShadow(x, y) {
  return state.shadows.some(s => s.x === x && s.y === y);
}
