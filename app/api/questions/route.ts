import { NextResponse } from "next/server";
import { questions } from "@/data/questions";

//GET Request
export async function GET() {
  return NextResponse.json(questions);
}

//POST Request
export async function POST(req: Request) {
  const newQuestion = await req.json();

  const id = questions.length ? questions[questions.length - 1].id + 1 : 1;
  const questionWithId = { ...newQuestion, id };

  //   const questionWithId = { id: questions.length + 1, ...newQuestion };

  questions.push(questionWithId);

  return NextResponse.json(questionWithId);
}
