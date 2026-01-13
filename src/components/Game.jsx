import Map from "./Map";
import DPad from "./DPad";
import InteractButton from "./InteractButton";

export default function Game() {
  return (
    <>
      <Map />
      <DPad />
      <div className="interact">
        <InteractButton onPress={() => console.log("Interact")} />
      </div>
    </>
  );
}
