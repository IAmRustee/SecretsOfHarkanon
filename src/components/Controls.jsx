import { move } from "../game/movement";
import { applyTriggers } from "../game/triggers";

export default function Controls({ state, setState }) {
  const step = (dx, dy) => {
    if (state.gameOver) return;

    let s = move({ ...state }, dx, dy);
    s = applyTriggers(s);
    setState(s);
  };

  return (
    <div className="controls">
      <button onClick={() => step(0, -1)}>▲</button>
      <button onClick={() => step(-1, 0)}>◀</button>
      <button onClick={() => step(1, 0)}>▶</button>
      <button onClick={() => step(0, 1)}>▼</button>
    </div>
  );
}
