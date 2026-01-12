import { TILE } from "../game/gameState";

export default function Stone({ state }) {
  return state.stones.map((s, i) => (
    <div
      key={i}
      className="entity stone"
      style={{ left: s.x * TILE, top: s.y * TILE }}
    />
  ));
}
