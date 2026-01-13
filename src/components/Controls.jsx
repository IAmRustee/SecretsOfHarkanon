export default function Controls({ move }) {
  return (
    <div className="controls">
      <button onTouchStart={() => move(0, -1)}>▲</button>
      <button onTouchStart={() => move(-1, 0)}>◀</button>
      <button onTouchStart={() => move(1, 0)}>▶</button>
      <button onTouchStart={() => move(0, 1)}>▼</button>
    </div>
  );
}
