// Hearts.jsx
import React, { useEffect, useState } from "react";

const Heart = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now(); // unique id
      const size = Math.random() * 20 + 20; // 20px to 40px
      const left = Math.random() * 100; // horizontal position
      const duration = Math.random() * 5 + 5; // 5s to 10s
      const newHeart = { id, size, left, duration };
      setHearts((prev) => [...prev, newHeart]);

      // Remove heart after its animation ends
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, duration * 1000);
    }, 500); // create new heart every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <div
          key={h.id}
          style={{
            position: "fixed",
            left: `${h.left}%`,
            bottom: "-50px",
            fontSize: h.size,
            color: "#ff4d6d",
            pointerEvents: "none",
            animation: `floatUp ${h.duration}s linear forwards`,
            zIndex: 9999,
          }}
        >
          ❤️
        </div>
      ))}

      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            50% { transform: translateY(-50vh) scale(1.2); opacity: 0.8; }
            100% { transform: translateY(-100vh) scale(1); opacity: 0; }
          }
        `}
      </style>
    </>
  );
};

export default Heart;