import React, { useState, useEffect } from "react";
import StartButton from "./components/StartButton";
import InfoBox from "./components/InfoBox";
import QuizBox from "./components/QuizBox";
import ResultBox from "./components/ResultBox";
import questions from "./questions.json";

function QuizApp() {
  const [step, setStep] = useState("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer;
    if (step === "quiz") {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step]);

  useEffect(() => {
    if (timeLeft === 0 && step === "quiz") {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleStartQuiz = () => setStep("info");
  const handleContinueQuiz = () => {
    setStep("quiz");
    setTimeLeft(15);
  };
  const handleExitQuiz = () => setStep("start");
  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(15);
    } else {
      setStep("result");
    }
  };

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setTimeout(handleNextQuestion, 1000);
  };

  return (
    <>
      {step === "start" && <StartButton onStart={handleStartQuiz} />}
      {step === "info" && <InfoBox onExit={handleExitQuiz} onContinue={handleContinueQuiz} />}
      {step === "quiz" && (
        <QuizBox
          question={questions[questionIndex]}
          timeLeft={timeLeft}
          onAnswerSelect={handleAnswerSelection}
          onNext={handleNextQuestion}
        />
      )}
      {step === "result" && <ResultBox score={score} totalQuestions={questions.length} onRestart={handleContinueQuiz} onQuit={handleExitQuiz} />}
    </>
  );
}

export default QuizApp;
