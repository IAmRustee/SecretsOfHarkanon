import { useState } from "react";
import TileMap from "./components/TileMap";
import Player from "./components/Player";
import Controls from "./components/Controls";
import { useControls } from "./game/useControls";
import "./App.css";

export default function App() {
  const [player, setPlayer] = useState({ x: 2, y: 2 });

  const move = (dx, dy) => {
    setPlayer(p => ({ x: p.x + dx, y: p.y + dy }));
  };

  useControls(move);

  return (
    <div className="app">
      <TileMap />
      <Player x={player.x} y={player.y} />
      <Controls move={move} />
    </div>
  );
}
