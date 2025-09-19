"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  //fetch questions on load
  useEffect(() => {
    fetch("api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  //handle answer from user
  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    } else {
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    }, 1000);
  };

  //loading state
  if (!questions.length) return <div>Loading...</div>;

  //end state
  if (currentIndex >= questions.length)
    return (
      <div>
        <div>
          {score} / {questions.length}
        </div>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setScore(0);
            setSelected(null);
          }}
        >
          Re-do Quiz
        </button>
      </div>
    );

  const question = questions[currentIndex];

  return (
    <div>
      <h1>Quiz</h1>

      <div>
        <h1>{question.question}</h1>
        {question.options.map((option) => {
          let color = "";
          if (selected) {
            if (option === selected && option === question.answer) {
              color = "bg-green-500 text-white"; // correct answer clicked
            } else if (option === selected) {
              color = "bg-red-500 text-white"; // wrong answer clicked
            } else {
              color = "bg-gray-300 text-black"; // other buttons faded
            }
          } else {
            color = "bg-blue-500 text-white hover:bg-blue-600"; // normal state
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selected}
              className={`px-4 py-2 rounded ${color}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <Link href={"/quiz/submit-question"}>Submit</Link>
    </div>
  );
}
