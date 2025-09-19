import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-10">
      <h1 className="font-dynapuff text-2xl md:text-3xl lg:text-4xl mb-5">
        Welcome to <span className="text-orange-300">Quizzzle</span>
      </h1>

      <h3 className="text-lg md:text-xl lg:text-2xl opacity-80 mb-7">
        Bite-sized quizzes that are fun, fast, and a little tricky.
      </h3>
      <Link
        href="/quiz"
        className="text-xl font-bold border-2 text-orange-300 border-orange-300 hover:text-stone-900 px-4 py-2 rounded-xl hover:bg-orange-300 transition-colors duration-300"
      >
        Start Quiz
      </Link>
    </div>
  );
}
