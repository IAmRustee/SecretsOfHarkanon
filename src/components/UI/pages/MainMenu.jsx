// pages/MainMenu.jsx
import ImageButton from "../components/ImageButton";
import title from "../assets/title.png";
import playBtn from "../assets/btn-play.png";
import quitBtn from "../assets/btn-quit.png";

export default function MainMenu() {
  return (
    <div className="screen">
      <img
        src={title}
        alt="Silver Moon City"
        className="title"
        draggable={false}
      />

      <div className="menu-buttons">
        <ImageButton src={playBtn} onClick={() => console.log("Play")} size={120} />
        <ImageButton src={quitBtn} onClick={() => console.log("Quit")} size={120} />
      </div>
    </div>
  );
}
