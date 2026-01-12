import { TILE } from "../game/gameState";

export default function Wall({ state }) {
  return state.walls.map((w, i) =>
    w.raised ? (
      <div
        key={i}
        className="entity wall"
        style={{ left: w.x * TILE, top: w.y * TILE, zIndex: 3 }}
      />
    ) : null
  );
}
