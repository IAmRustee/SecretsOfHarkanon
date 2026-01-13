import { TILE } from "../game/constants";

export default function Stone({ x, y }) {
  return (
    <img
      src="/tiles/objects/moonstone.png"
      style={{
        position: "absolute",
        left: x * TILE,
        top: y * TILE,
        width: TILE,
        height: TILE,
        imageRendering: "pixelated",
        zIndex: 3,
      }}
    />
  );
}
