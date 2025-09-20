import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//GET Request
export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      orderBy: { id: "asc" },
    });

    //converted options string to array
    const parsedQuestions = questions.map((q) => ({
      ...q,
      options: JSON.parse(q.options),
    }));
    return NextResponse.json(parsedQuestions);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}

//POST Request
export async function POST(req: Request) {
  try {
    const data = await req.json();

    //Validate input
    if (!data.question || !data.options || !data.answer) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    //Creating question in database
    const addedQuestion = await prisma.question.create({
      data: {
        question: data.question,
        options: JSON.stringify(data.options),
        answer: data.answer,
      },
    });

    return NextResponse.json({
      ...addedQuestion,
      options: JSON.parse(addedQuestion.options),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create question." },
      { status: 500 }
    );
  }
}
