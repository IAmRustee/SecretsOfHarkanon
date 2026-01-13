// components/ImageButton.jsx
export default function ImageButton({ src, onClick, size = 96 }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        style={{
          width: size,
          height: size,
          imageRendering: "pixelated",
        }}
      />
    </button>
  );
}
