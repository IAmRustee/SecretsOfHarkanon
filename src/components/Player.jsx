import { TILE } from "../game/constants";

export default function Player({ x, y }) {
  return (
    <img
      src="/tiles/player/player_idle.png"
      style={{
        position: "absolute",
        left: x * TILE,
        top: y * TILE,
        width: TILE,
        height: TILE,
        zIndex: 5,
        imageRendering: "pixelated"
      }}
    />
  );
}
