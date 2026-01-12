import { TILE } from "../game/gameState";
import { isPlayerInShadow } from "../game/light";

export default function Player({ state }) {
  const safe = isPlayerInShadow(state.player, state.walls);

  return (
    <div
      className={`entity player ${!safe ? "silver" : ""}`}
      style={{
        left: state.player.x * TILE,
        top: state.player.y * TILE,
        zIndex: 2
      }}
    />
  );
}
