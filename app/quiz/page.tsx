import { Metadata } from "next";
import Quiz from "./Quiz";

export const metadata: Metadata = {
  title: "Quizzzle | Quiz",
  description:
    "Quizzzle. A fun quiz app to test yourself. Test your knowledge with 50 questions and get your score at the end.",
};

export default function QuizPage() {
  return <Quiz />;
}
