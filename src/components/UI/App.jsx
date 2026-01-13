// App.jsx
import { useState } from "react";
import MainMenu from "./pages/MainMenu";
import LevelSelect from "pages/LevelSelect";
import Game from "pages/Game"
import "./index.css";

export default function App() {
  const [screen, setScreen] = useState("menu");

  return (
    <>
      {screen === "menu" && <MainMenu />}
      {screen === "level" && <LevelSelect />}
      {screen === "game" && <Game />}
    </>
  );
}
