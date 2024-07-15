import React from "react";

function QuizBox({ question, timeLeft, onAnswerSelect, onNext }) {
  return (
    <div className="quiz_box activeQuiz">
      <header>
        <div className="title">Awesome Quiz Application</div>
        <div className="timer">
          <div className="time_left_txt">Time Left</div>
          <div className="timer_sec">{timeLeft}</div>
        </div>
        <div className="time_line"></div>
      </header>
      <section>
        <div className="que_text">
          <span>{question.numb}. {question.question}</span>
        </div>
        <div className="option_list">
          {question.options.map((option, index) => (
            <div key={index} className="option" onClick={() => onAnswerSelect(option === question.answer)}>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <div className="total_que"><span><p>{question.numb}</p> of <p>{question.length}</p> Questions</span></div>
        <button className="next_btn show" onClick={onNext}>Next Que</button>
      </footer>
    </div>
  );
}

export default QuizBox;
