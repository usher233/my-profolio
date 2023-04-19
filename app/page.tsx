import { Inter } from "next/font/google";
import Hero from "./components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" relative w-full grid grid-cols-2">
      <Hero />
      <div id="Hero intro" className="hidden z-40 text-7xl  lg:block py-32 font-serif mt-40">
        <div className="block hover:first-letter:text-red-700 hover:animate-pulse transition-all">Welcome</div>
        <div className="text-4xl  first-letter:text-7xl animate-pulse transition-all ml-4 hover:first-letter:text-blue-400">To the page of </div>
        <div className="text-4xl  first-letter:text-7xl animate-pulse transition-all ml-4 hover:first-letter:text-pink-400">Future frontend developer</div>
      </div>
      
    </main>
  );
}
