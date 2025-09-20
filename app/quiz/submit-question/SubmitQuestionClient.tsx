"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type QuestionInput = {
  question: string;
  options: string[];
  answer: string;
};

export default function SubmitQuestionClient() {
  const router = useRouter();

  const [newQuestion, setNewQuestion] = useState<QuestionInput>({
    question: "",
    options: ["", "", "", ""],
    answer: "",
  });

  const handleAddQuestion = async () => {
    const res = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    });
    const added = await res.json();
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      answer: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-5 pb-10">
      <h1 className="text-4xl font-semibold text-orange-300">
        Submit A Question
      </h1>
      <form
        className="border-2 border-orange-300 px-7 lg:px-10 py-7 flex flex-col gap-6 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddQuestion();
        }}
      >
        <input
          type="text"
          placeholder="Question"
          value={newQuestion.question}
          className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg lg:w-[60%] mx-auto"
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-2 px-4 py-4 lg:px-7 lg:py-4 rounded border-orange-300">
          <input
            type="text"
            placeholder="Option 1"
            value={newQuestion.options[0]}
            className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg"
            onChange={(e) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  e.target.value,
                  newQuestion.options[1],
                  newQuestion.options[2],
                  newQuestion.options[3],
                ],
              })
            }
          />

          <input
            type="text"
            placeholder="Option 2"
            value={newQuestion.options[1]}
            className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg"
            onChange={(e) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  e.target.value,
                  newQuestion.options[2],
                  newQuestion.options[3],
                ],
              })
            }
          />

          <input
            type="text"
            placeholder="Option 3"
            value={newQuestion.options[2]}
            className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg"
            onChange={(e) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  newQuestion.options[1],
                  e.target.value,
                  newQuestion.options[3],
                ],
              })
            }
          />

          <input
            type="text"
            placeholder="Option 4"
            value={newQuestion.options[3]}
            className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg"
            onChange={(e) =>
              setNewQuestion({
                ...newQuestion,
                options: [
                  newQuestion.options[0],
                  newQuestion.options[1],
                  newQuestion.options[2],
                  e.target.value,
                ],
              })
            }
          />
        </div>

        <input
          type="text"
          placeholder="Answer (Should match one of the options)"
          value={newQuestion.answer}
          className="lg:text-lg border-2 border-orange-300 px-4 py-2 rounded-lg lg:w-[60%] mx-auto"
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, answer: e.target.value })
          }
        />

        <button
          type="submit"
          className="text-sm lg:text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 cursor-pointer lg:w-[60%] mx-auto"
        >
          Submit
        </button>
      </form>

      <div className="flex gap-4">
        <Link
          href={"/"}
          className="text-sm lg:text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 cursor-pointer"
        >
          Go To Homepage
        </Link>
        <button
          onClick={() => router.push("/quiz")}
          className="text-sm lg:text-lg font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300 cursor-pointer"
        >
          Go To Quiz
        </button>
      </div>
    </div>
  );
}
