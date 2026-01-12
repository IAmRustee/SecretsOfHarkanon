import { isPlayerInShadow } from "./light";

export function applyTriggers(state) {
  const pressed = state.plates.some(p =>
    state.stones.some(s => s.x === p.x && s.y === p.y)
  );

  state.walls = state.walls.map(w => ({
    ...w,
    raised: pressed
  }));

  if (!isPlayerInShadow(state.player, state.walls)) {
    state.gameOver = true;
  }

  return { ...state };
}
