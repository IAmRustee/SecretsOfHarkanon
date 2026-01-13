import { TILE } from "../game/constants";
import { state } from "../game/gameState";

export default function Player() {
  const { x, y } = state.player;

  return (
    <img
      src="/tiles/player/player_idle.png"
      style={{
        position: "absolute",
        left: x * TILE,
        top: y * TILE,
        width: TILE,
        height: TILE,
        imageRendering: "pixelated",
        zIndex: 4,
      }}
    />
  );
}
