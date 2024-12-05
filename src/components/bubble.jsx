import React from "react";
import './bubble.css';

const Bubble = () => {
  const bubbleCount = 20; // Number of bubbles to render
  const bubbles = Array.from({ length: bubbleCount });

  return (
    <div className="bubble-container">
      {bubbles.map((_, index) => (
        <div key={index} className="bubble"></div>
      ))}
    </div>
  );
};

export default Bubble;
