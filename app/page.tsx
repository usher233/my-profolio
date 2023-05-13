import Header from "./sections/Header";
import About from "./sections/About";
import IntroPage from "./sections/IntroPage";


export default function Home() {
  return (
    <main id="/" className="smooth-scroll grid grid-cols-2 snap-both">
      <Header />
      <IntroPage />
      <div id="about" className="w-screen h-screen text-black text-7xl">
        <About />
      </div>
    </main>
  );
}


