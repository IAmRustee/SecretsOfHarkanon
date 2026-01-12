import Player from "./Player";
import Stone from "./Stone";
import Wall from "./Wall";
import Shadow from "./Shadow";
import Plate from "./PressurePlate";

export default function Map({ state }) {
  return (
    <div className="map">
      <Plate state={state} />
      <Shadow state={state} />
      <Wall state={state} />
      <Stone state={state} />
      <Player state={state} />
    </div>
  );
}
