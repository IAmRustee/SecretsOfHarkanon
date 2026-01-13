import ArrowButton from "./ArrowButton";
import { movePlayer } from "../game/movement";

export default function DPad() {
  return (
    <div className="dpad">
      <div />
      <ArrowButton dir="up" onPress={() => movePlayer(0, -1)} />
      <div />

      <ArrowButton dir="left" onPress={() => movePlayer(-1, 0)} />
      <div />
      <ArrowButton dir="right" onPress={() => movePlayer(1, 0)} />

      <div />
      <ArrowButton dir="down" onPress={() => movePlayer(0, 1)} />
      <div />
    </div>
  );
}
