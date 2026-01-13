import { useEffect, useState } from "react";
import Map from "./components/Map";
import { movePlayer } from "./game/movement";
import "./App.css";

export default function App() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "ArrowUp") movePlayer(0, -1);
      if (e.key === "ArrowDown") movePlayer(0, 1);
      if (e.key === "ArrowLeft") movePlayer(-1, 0);
      if (e.key === "ArrowRight") movePlayer(1, 0);
      forceUpdate(n => n + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <Map />;
}
