import { TILE } from "../game/gameState";

export default function Shadow({ x, y }) {
  return (
    <img
      src="/tiles/shadow/shadow.png"
      style={{
        position: "absolute",
        left: x * 16,
        top: y * 16,
        zIndex: 2,
        pointerEvents: "none"
      }}
    />
  );
}
