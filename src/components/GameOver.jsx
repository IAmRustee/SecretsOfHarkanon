export default function GameOver({ onRestart }) {
  return (
    <div className="gameover">
      <p>☠ YOU TURNED TO SILVER ☠</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
