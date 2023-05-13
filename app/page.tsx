import About from "./sections/About";
import Hero from "./sections/Hero";


export default function Home() {
  return (
    <main id="/" className=" relative w-full smooth-scroll grid grid-cols-2 snap-both">
      <Hero />
      
      <div id="Intro" className="hidden z-40 text-7xl  lg:block pt-32 font-serif mt-40 h-screen">
        <div className="block delay-500 hover:first-letter:text-red-700 transition-all">Welcome</div>
        <div className="text-4xl delay-75 first-letter:text-7xl transition-all ml-4 hover:first-letter:text-blue-400">To the page of </div>
        <div className="text-4xl delay-150 first-letter:text-7xl transition-all ml-4 hover:first-letter:text-pink-400">Future frontend developer</div>
        
      </div>
      
      <div id="about" className="w-screen h-screen text-black text-7xl">
        <About />
      </div>
    </main>
  );
}


