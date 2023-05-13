import Hero from './Hero';

const IntroPage = () => {
  return (
    <div className='grid grid-cols-2 w-full '>
      <Hero />
      <div
        id="Intro"
        className=" z-40 text-7xl  lg:block pt-32 font-serif mt-40 h-screen text-center "
      >
        <div className="block delay-500 hover:first-letter:text-red-700 transition-all">
          Hello, and welcome
        </div>
        <br />
        <div className="text-7xl delay-75 transition-all ml-4 hover:first-letter:text-blue-400">
          To the page of
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
