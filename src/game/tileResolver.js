export function getTileSprite(symbol) {
  switch (symbol) {
    case "#": return "/tiles/wall/wall_1.png";
    case "3": return "/tiles/wall/wall_1_top.png";
    case ".": return "/tiles/floor/tile_1.png";
    case "P": return "/tiles/objects/pressure_plate_1.png";
    case "G": return "/tiles/gate/gate_closed.png";
    default: return null;
  }
}
