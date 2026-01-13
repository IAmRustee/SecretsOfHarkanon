import { TILE } from "../game/constants";
import { MAP } from "../game/mapData";
import { getTileSprite } from "../game/tileResolver";

export default function TileMap() {
  return (
    <div className="map">
      {MAP.map((row, y) =>
        row.split("").map((cell, x) => {
          const src = getTileSprite(cell);
          if (!src) return null;

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
                imageRendering: "pixelated"
              }}
            />
          );
        })
      )}
    </div>
  );
}
