import { TILE } from "../game/gameState";

export default function Shadow({ state }) {
  return state.walls.map((w, i) =>
    w.raised ? (
      <div
        key={i}
        className="entity shadow"
        style={{
          left: w.x * TILE,
          top: (w.y + 1) * TILE,
          zIndex: 1
        }}
      />
    ) : null
  );
}
