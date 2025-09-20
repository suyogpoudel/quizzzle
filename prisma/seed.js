const { PrismaClient } = require("@prisma/client");
const { questions } = require("../data/questions.js"); // relative path

const prisma = new PrismaClient();

async function main() {
  for (const q of questions) {
    await prisma.question.create({
      data: {
        question: q.question,
        options: JSON.stringify(q.options),
        answer: q.answer,
      },
    });
  }
  console.log("Seed finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
