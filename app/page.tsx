import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/quiz"}>Go to Quiz Page</Link>
    </div>
  );
}
