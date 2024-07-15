import React from "react";

function InfoBox({ onExit, onContinue }) {
  return (
    <div className="info_box activeInfo">
      <div className="info-title"><span>Some Rules of this Quiz</span></div>
      <div className="info-list">
        <div className="info">1. You will have only <span>15 seconds</span> per each question.</div>
        <div className="info">2. Once you select your answer, it can't be undone.</div>
        <div className="info">3. You can't select any option once time goes off.</div>
        <div className="info">4. You can't exit from the Quiz while you're playing.</div>
        <div className="info">5. You'll get points on the basis of your correct answers.</div>
      </div>
      <div className="buttons">
        <button className="quit" onClick={onExit}>Exit Quiz</button>
        <button className="restart" onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
}

export default InfoBox;
