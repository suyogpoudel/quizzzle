"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type QuestionInput = {
  question: string;
  options: string[];
  answer: string;
};

export default function SubmitQuestion() {
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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddQuestion();
        }}
      >
        <input
          type="text"
          placeholder="Question"
          value={newQuestion.question}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Option 1"
          value={newQuestion.options[0]}
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
          placeholder="Option 1"
          value={newQuestion.options[1]}
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
          placeholder="Option 1"
          value={newQuestion.options[2]}
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
          placeholder="Option 1"
          value={newQuestion.options[3]}
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

        <input
          type="text"
          placeholder="Question"
          value={newQuestion.answer}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, answer: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>

      <button onClick={() => router.push("/quiz")}>Go to homepage</button>
    </div>
  );
}
