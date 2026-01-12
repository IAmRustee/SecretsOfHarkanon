import { useState } from "react";
import Map from "./components/Map";
import Controls from "./components/Controls";
import GameOver from "./components/GameOver";
import { initialState } from "./game/gameState";
import "./App.css";

export default function App() {
  const [state, setState] = useState(initialState);

  return (
    <div className="app">
      <Map state={state} />
      {state.gameOver && (
        <GameOver onRestart={() => setState(initialState)} />
      )}
      <Controls state={state} setState={setState} />
    </div>
  );
}
