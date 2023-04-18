import { Inter } from "next/font/google";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative w-full max-w-lg translate-y-60  flex flex-col">
      
        <div id="blur-light" className="lg:hidden translate-x-40">
          <div className="filter blur-2xl absolute bg-purple-300 rounded-full top-0 w-72 h-72 -left-4 mix-blend-multiplyfilter blur-2xl animate-blob"></div>
          <div className="filter blur-2xl absolute bg-yellow-300 rounded-full top-0 w-72 h-72 -right-4 mix-blend- filter blur-2xl animate-blob"></div>
          <div className="filter blur-2xl absolute bg-pink-300 rounded-full mix-blend-multiply w-72 h-72 left-20 animate-blob"></div>
        </div>


        
      
    </main>
  );
}
