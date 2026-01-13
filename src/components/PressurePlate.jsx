import { TILE } from "../game/constants";

export default function PressurePlate({ x, y, active }) {
  return (
    <img
      src={
        active
          ? "/tiles/objects/pressure_plate_1_active.png"
          : "/tiles/objects/pressure_plate_1.png"
      }
      style={{
        position: "absolute",
        left: x * TILE,
        top: y * TILE,
        width: TILE,
        height: TILE,
        imageRendering: "pixelated",
        zIndex: 2,
      }}
    />
  );
}
