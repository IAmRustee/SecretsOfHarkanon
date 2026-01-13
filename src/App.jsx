import { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import { movePlayer } from "./game/movement";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("menu");
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (screen !== "game") return;

    const onKey = e => {
      if (e.key === "ArrowUp") movePlayer(0, -1);
      if (e.key === "ArrowDown") movePlayer(0, 1);
      if (e.key === "ArrowLeft") movePlayer(-1, 0);
      if (e.key === "ArrowRight") movePlayer(1, 0);
      forceUpdate(n => n + 1);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [screen]);

  return (
    <>
      {screen === "menu" && (
        <MainMenu onStart={() => setScreen("game")} />
      )}

      {screen === "game" && <Game />}
    </>
  );
}
