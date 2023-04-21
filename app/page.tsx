import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className=" relative w-full grid grid-cols-2">
      <Hero />
      
      <div id="Hero intro" className="hidden z-40 text-7xl  lg:block py-32 font-serif mt-40">
        <div className="block delay-500 hover:first-letter:text-red-700 transition-all">Welcome</div>
        <div className="text-4xl delay-75 first-letter:text-7xl transition-all ml-4 hover:first-letter:text-blue-400">To the page of </div>
        <div className="text-4xl delay-150 first-letter:text-7xl transition-all ml-4 hover:first-letter:text-pink-400">Future frontend developer</div>
        
      </div>
      
    </main>
  );
}
