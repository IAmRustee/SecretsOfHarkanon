export function getTileSprite(symbol) {
  switch (symbol) {
    case "#": return "/tiles/wall/wall_1.png";
    case "b": return "/tiles/objects/spikes_inactive.png";
    case "n": return "/tiles/objects/spikes_active.png";
    case "3": return "/tiles/wall/wall_1_top.png";
    case ".": return "/tiles/floor/tile_1.png";
    case "P": return "/tiles/objects/pressure_plate_1.png";
    case "f": return "/tiles/objects/pressure_plate_2.png";
    case "G": return "/tiles/gate/gate_closed.png";
    case "g": return "/tiles/gate/gate_opened.png";
    case "?": return "/tiles/placeholder.png"
    case "M": return "/tiles/floor/moon_tile.png"
    default: return null;
  }
}
