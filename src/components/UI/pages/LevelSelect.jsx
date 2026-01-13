// pages/LevelSelect.jsx
import ImageButton from "ImageButton";
import backBtn from "../assets/btn-back.png";
import levelBtn from "../assets/btn-level.png";
import menuBtn from "../assets/btn-menu.png";

export default function LevelSelect() {
  return (
    <div className="screen">
      <div className="triangle-layout">
        <ImageButton src={levelBtn} size={96} onClick={() => console.log("Level")} />
        <ImageButton src={backBtn} size={96} onClick={() => console.log("Back")} />
        <ImageButton src={menuBtn} size={96} onClick={() => console.log("Menu")} />
      </div>
    </div>
  );
}
