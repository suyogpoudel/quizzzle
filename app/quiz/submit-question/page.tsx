import { Metadata } from "next";
import SubmitQuestionClient from "./SubmitQuestionClient";

export const metadata: Metadata = {
  title: "Quizzzle | Submit Questions",
  description:
    "Quizzzle. A fun quiz app to test yourself. Test your knowledge with 50 questions and get your score at the end.",
};

export default function SubmitQuestion() {
  return <SubmitQuestionClient />;
}
