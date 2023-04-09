import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const quizData = [
  {
    question: "Which of the following is the correct name of React.js?",
    options: ["React", "React.js", "ReactJs", "NodeJs"],
    answer: "ReactJs"
  },
  {
    question: "What is the default port where webpack-server runs?",
    options: ["3000", "8080", "3030", "6060"],
    answer: "3000"
  },
  {
    question: "How many numbers of elements a valid react component can return?",
    options: ["1", "2", "3", "4"],
    answer: "1"
  },

  {
    question: "What is a babel?",
    options: ["Transpiler", "Compiler", "Interpreter", "None"],
    answer: "Transpiler"
  },
  {
    question: "Among the following which is used to create a class inheritance?",
    options: ["Inherits", "Extends", "Create", "This"],
    answer: "Extends"
  },
  {
    question: "What is ReactJS?",
    options: ["Server-side Framework", "User-interface Framework", "both A and B", "None"],
    answer: "User-interface Framework"
  },
  {
    question: "Who created Reactjs",
    options: ["Jordan Mike", "Jordan Walke", "Tim Lee", "Jordan Lee"],
    answer: "Jordan Walke"
  },
  {
    question: "In which language is React.js written?",
    options: ["Java", "Phyton", "JavaScript", "PHP"],
    answer: "JavaScript"
  },
  {
    question: "In MVC, what does React.js act as?",
    options: ["Model", "Controller", "View", "Middleware"],
    answer: "View"
  },
  {
    question: " Identify the smallest building block of React.JS",
    options: ["Props", "Element", "Components", "None"],
    answer: "Components"
  },
];

const Gamelayout = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timer);
    }
  }, [timer]);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestion = () => {
    const currentQ = quizData[currentQuestion];

    return (
      <div>
        <h3 className='text-center text-[#fff]'>{currentQ.question}</h3>
        <ul className='grid grid-cols-2 gap-3'>
          {currentQ.options.map((option, index) => (
            <li className='lg:w-[250px] w-[120px] bg-[blue] text-[#fff] hover:bg-[red]  rounded-xl p-2 m-3 text-center' key={index}>
              <button onClick={() => handleAnswerClick(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='quiz'>
      {timer > 0 && (
        <>
          <h2 className='text-[1.64rem] text-gray-600 font-[500]'>Quiz</h2>
          <p className='text-[1.25rem] text-[#4f43c0] '>Time Left: {timer} seconds</p>
          {currentQuestion < quizData.length ? (
            renderQuestion()
          ) : (
            <div className='text-[#fff] flex flex-col gap-4'>
              <h3>Your Score: {score}</h3>
              <p>Thank you for playing!</p>
              <Link className='text-[#fff] bg-blue-800 text-center p-2 rounded-md' to='/quiz-app/'>Go back Home</Link>
            </div>
          )}
        </>
      )}
      {timer === 0 && (
        <div>
          <h3>Time's up!</h3>
          <h3>Your Score: {score}</h3>
          <p>Thank you for playing!</p>
        </div>
      )}
    </div>
  );
};

export default Gamelayout;

