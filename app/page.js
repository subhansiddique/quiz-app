"use client";
import { useState } from "react";
import UserInfoForm from "./userInfo";
const quizQuestions = [
  
  {
    question: "What is 6 × 7?",
    options: ["42", "36", "48", "49"],
    answer: "42",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the capital city of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 5 + 3?",
    options: ["7", "8", "9", "6"],
    answer: "8",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "What is 12 - 4?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is 16 ÷ 4?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "What does 'CSS' stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Code Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What symbol is used to comment a line in JavaScript?",
    options: ["//", "/* */", "#", "--"],
    answer: "//",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption(""); 
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1); 
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption("");
    setUserInfo(null); 
  };

  const handleUserInfoSubmit = (info) => {
    setUserInfo(info);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Quiz Time!</h1>
      {!userInfo ? (
        <UserInfoForm onSubmit={handleUserInfoSubmit} />
      ) : showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">
           Name: {userInfo.name} <br /> RollNo:{userInfo.rollNo}<br /> Your Score is : {score}/{quizQuestions.length}
          </h2>
        <h3 className="text-2xl pt-3">{score < 7 ?` Keep it up! ${userInfo.name}` : `Well done! ${userInfo.name}`}</h3>
          <button
            onClick={handleRestartQuiz}
            className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-200"
          >
            Back to Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {quizQuestions[currentQuestion].question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`py-2 px-4 border rounded-lg text-gray-700 font-medium ${
                  selectedOption === option
                    ? "bg-gray-300"
                    : "bg-gray-50 hover:bg-gray-200"
                } transition-all duration-200`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="mt-4 py-2 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg disabled:bg-blue-300 hover:bg-blue-600 transition-all duration-200"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}
