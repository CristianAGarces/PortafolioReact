import { useState, useEffect } from "react";
import '../../styles/mouseFollo.css'

const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
    <section id="mouse">
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 1)",
          border: "2px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          right:-25,
          bottom:-25,
          width: 50,
          height: 50,
          zIndex:100,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      />
      <button className="btn-follow" onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}<br/>
        Follower
      </button>
      </section>
    </>
  );
};

export default MouseFollower;
