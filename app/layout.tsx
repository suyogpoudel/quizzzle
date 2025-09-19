import type { Metadata } from "next";
import { DynaPuff, Commissioner } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400"],
});

const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quizzzle",
  description:
    "Quizzzle. A fun quiz app to test yourself. Test your knowledge with 50 questions and get your score at the end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${commissioner.className} ${dynaPuff.className} flex flex-col min-h-screen bg-stone-900 text-stone-200 font-commissioner  antialiased`}
      >
        <Navbar />
        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>
        <footer className="py-4 px-8 flex justify-between items-center border-t-1 border-orange-300">
          <p className="text-sm opacity-80">&copy; 2025 | Quizzle</p>
          <p className="text-lg opacity-80">Suyog Poudel</p>
        </footer>
      </body>
    </html>
  );
}
