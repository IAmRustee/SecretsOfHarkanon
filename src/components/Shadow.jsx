import { TILE } from "../game/constants";

export default function Shadow({ x, y }) {
  return (
    <img
      src="/tiles/shadow/shadow.png"
      style={{
        position: "absolute",
        left: x * TILE,
        top: y * TILE,
        width: TILE,
        height: TILE,
        imageRendering: "pixelated",
        zIndex: 1,        // above floor
        pointerEvents: "none",
      }}
    />
  );
}
