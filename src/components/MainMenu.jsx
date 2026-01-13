
import title from "../assets/main_menu/title.png";

export default function MainMenu({ onStart }) {
  return (
    <div className="menu">
      <img 
        src={title}
        alt="Silver Moon City"
        className="title"
        draggable={false}
      />

      <button onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
