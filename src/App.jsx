import { useState } from 'react'
import './App.css'

function App() {
  const questions = [
    {
      question:"What is my name?",
      options:["bibhusan","shishir","barsha","ankura"],
      answer:"bibhusan"
    },
    {
      question: "how to be great?",
      options: ["discipline","talent"],
      answer: "discipline"
    },
    {
      question: "bade bhaiya mujhe ........ khelna hai",
      options: ["pubg","phiri phire","free fire"],
      answer: "free fire"
    },
    {
      question: "What is current government called ?",
      options: ["belun sarkar","balen sarkar","harke qr code","sidha kura janata sanga"],
      answer: "belun sarkar"
    },
  ];

  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [selectedAnswer,setSelectedAnswer] = useState(null);
  const [showResult,setShowResult] = useState(false);

  function handleAnswerClick(option){
    setSelectedAnswer(option);
    if(questions[currentQuestionIndex].answer === option){
      setScore(score+1);
    }
    if(currentQuestionIndex === (questions.length - 1)){
      setShowResult(true);
    }else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function renderQuiz(){
    return(
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div>
            {questions[currentQuestionIndex].options.map((option) => (
                <button key={option} onClick={()=>handleAnswerClick(option)}>
                  {option}
                </button>
            ))}
          </div>
          <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>
    );
  }

  function renderResult(){
    return(
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
    );
  }

  return(
      <div>
        {showResult ? renderResult() : renderQuiz()}
      </div>
  )
}

export default App;
