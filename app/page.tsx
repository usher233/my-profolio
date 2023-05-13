import Header from "./sections/Header";
import About from "./sections/About";
import IntroPage from "./sections/IntroPage";


export default function Home() {
  return (
    <main id="/" className="smooth-scroll snap-both ">
      <Header />
      <IntroPage />
      <div id="about" className="w-full h-full">
        <About />
      </div>
    </main>
  );
}


