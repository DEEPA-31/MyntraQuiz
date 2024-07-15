import React from "react";

function StartButton({ onStart }) {
  return (
    <div className="start_btn">
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default StartButton;
