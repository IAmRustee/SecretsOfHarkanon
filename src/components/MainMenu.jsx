export default function MainMenu({ onStart }) {
  return (
    <div className="menu">
      <h1>Secrets of Harkanon</h1>

      <button onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
