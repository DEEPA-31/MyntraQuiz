import React from "react";

function ResultBox({ score, totalQuestions, onRestart, onQuit }) {
  const getMessage = () => {
    // if(score>=9) return "HURRAY !!! You won 20% Discount"
    if (score > 6) return "and congrats! 🎉";
    if (score > 1) return "and nice 😎";
    return "and sorry 😐";
  };

  return (
    <div className="result_box activeResult">
      <div className="icon"><i className="fas fa-crown"></i></div>
      <div className="complete_text">You've completed the Quiz!</div>
      <div className="score_text">
        <span>{getMessage()},You got <p>{score}</p> out of <p>{totalQuestions}</p></span>
      </div>
      <div className="buttons">
        <button className="restart" onClick={onRestart}>Replay Quiz</button>
        <button className="quit" onClick={onQuit}>Quit Quiz</button>
      </div>
    </div>
  );
}

export default ResultBox;
