"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconPencilPlus, IconRotateRectangle } from "@tabler/icons-react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export default function QuizClient() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  // Fetch questions on mount
  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Failed to load questions:", err));
  }, []);

  // Handle user answer
  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[currentIndex].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    }, 750);
  };

  // Loading state
  if (!questions.length) return <div>Loading...</div>;

  // Quiz completed
  if (currentIndex >= questions.length)
    return (
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl text-orange-300 font-semibold">
          Quiz Completed
        </h1>
        <div className="flex gap-2 items-end justify-center mt-7">
          <p className="text-6xl font-semibold text-orange-300">{score}</p>
          <p className="text-lg">/ {questions.length}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <button
            className="text-sm lg:text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 cursor-pointer flex items-center gap-2 m-auto"
            onClick={() => {
              setCurrentIndex(0);
              setScore(0);
              setSelected(null);
            }}
          >
            Re-do Quiz <IconRotateRectangle />
          </button>
          <Link
            href={"/quiz/submit-question"}
            className="text-sm lg:text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 cursor-pointer flex items-center gap-2 m-auto"
          >
            Submit New Questions <IconPencilPlus />
          </Link>
        </div>
      </div>
    );

  // Current question
  const question = questions[currentIndex];

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-10">
      <h1 className="text-4xl font-semibold text-orange-300">Quiz</h1>

      <div className="border-2 border-orange-300 px-10 py-7 flex flex-col gap-4 rounded-lg">
        <h3 className="text-2xl">{question.question}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => {
            let color = "";
            if (selected) {
              if (option === selected && option === question.answer)
                color = "bg-green-500 text-white";
              else if (option === selected) color = "bg-red-500 text-white";
              else color = "bg-gray-300 text-black";
            } else {
              color = "bg-blue-500 text-white hover:bg-blue-600";
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={!!selected}
                className={`px-4 py-4 rounded-lg ${color} text-xl`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <Link
        href={"/quiz/submit-question"}
        className="text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 flex items-center gap-2"
      >
        Submit New Questions <IconPencilPlus />
      </Link>
    </div>
  );
}
