import { useState } from "react";

export default function ArrowButton({ dir, onPress }) {
  const [pressed, setPressed] = useState(false);

  const src = `/ui/${dir}_${pressed ? "pressed" : "idle"}.png`;

  return (
    <img
      src={src}
      onTouchStart={(e) => {
        e.preventDefault();
        setPressed(true);
        onPress();
      }}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      draggable={false}
      style={{
        width: 64,
        height: 64,
        imageRendering: "pixelated",
      }}
    />
  );
}
