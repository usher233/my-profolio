import Hero from './Hero';

const IntroPage = () => {
  return (
    <>
      <Hero />
      <div
        id="Intro"
        className=" z-40 text-7xl  lg:block pt-32 font-serif mt-40 h-screen  "
      >
        <div className="block delay-500 hover:first-letter:text-red-700 transition-all">
          Hello and Welcome
        </div>
        <br />
        <div className="text-4xl delay-75 first-letter:text-7xl transition-all ml-4 hover:first-letter:text-blue-400">
          To the page of{' '}
        </div>
      </div>
    </>
  );
};

export default IntroPage;
