import { TILE } from "../game/gameState";

export default function Plate({ state }) {
  return state.plates.map((p, i) => (
    <div
      key={i}
      className="entity plate"
      style={{ left: p.x * TILE, top: p.y * TILE }}
    />
  ));
}
