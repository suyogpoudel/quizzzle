import { IconPencilPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-4 px-8 flex justify-between items-center">
      <Link
        href={"/"}
        className="font-dynapuff text-xl lg:text-3xl text-orange-300"
      >
        Qui<span className="text-red-500">z</span>
        <span className="text-green-500">z</span>
        <span className="text-blue-500">z</span>le
      </Link>

      <div>
        <Link
          href={"/quiz/submit-question"}
          className="group text-sm lg:text-lg text-orange-300 font-commissioner flex gap-2 items-center"
        >
          <span className="group-hover:opacity-80 opacity-90">
            Submit Questions
          </span>
          <div className="p-2 border-2 border-orange-300 rounded-full group-hover:bg-orange-300 group-hover:text-stone-900 transition-colors duration-500">
            <IconPencilPlus />
          </div>
        </Link>
      </div>
    </nav>
  );
}
