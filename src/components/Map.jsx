import { state } from "../game/gameState";
import { TILE } from "../game/constants";
import Stone from "./Stone";
import Player from "./Player";
import PressurePlate from "./PressurePlate";
import Shadow from "./Shadow";
import LevelComplete from "./LevelComplete";


export default function Map() {
  return (
    <div className="map">
      {/* Tiles */}
      {state.map.map((row, y) =>
        row.split("").map((cell, x) => {
          const src =
            cell === "#"
              ? "/tiles/wall/wall_2.png"
              : "/tiles/floor/tile_1.png";

          return (
            <img
              key={`${x}-${y}`}
              src={src}
              style={{
                position: "absolute",
                left: x * TILE,
                top: y * TILE,
                width: TILE,
                height: TILE,
                imageRendering: "pixelated",
                zIndex: 0,
              }}
            />
          );
        })
      )}

      {/* Gates */}
      {state.gates.map(
        (g, i) =>
          !g.open && (
            <img
              key={i}
              src="/tiles/gate/gate_closed.png"
              style={{
                position: "absolute",
                left: g.x * TILE,
                top: g.y * TILE,
                width: TILE,
                height: TILE,
                imageRendering: "pixelated",
                zIndex: 2,
              }}
            />
          )
      )}

      {/* Plates */}
      {state.plates.map((p, i) => {
        const active =
          (state.player.x === p.x && state.player.y === p.y) ||
          state.stones.some(s => s.x === p.x && s.y === p.y);

        return (
          <PressurePlate
            key={i}
            x={p.x}
            y={p.y}
            active={active}
          />
        );
      })}

      {/* Stones */}
      {state.stones.map((s, i) => (
        <Stone key={i} x={s.x} y={s.y} />
      ))}

      {/* Shadows */}
      {state.shadows.map((s, i) => (
        <Shadow key={i} x={s.x} y={s.y} />
      ))}


      <Player />
      {state.levelComplete && <LevelComplete />}
    </div>
  );
}
