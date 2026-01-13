import { useState } from "react";

export default function InteractButton({ onPress }) {
  const [pressed, setPressed] = useState(false);

  const src = `/ui/interact_${pressed ? "pressed" : "idle"}.png`;

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
        width: 72,
        height: 72,
        imageRendering: "pixelated",
      }}
    />
  );
}
