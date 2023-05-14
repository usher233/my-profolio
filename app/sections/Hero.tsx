const Hero = () => {
  return (
    <div className="">
    <div className="relative w-full  translate-y-60">
      <a href="https://github.com/usher233">
        <div id="blur-light" className="">
          <div className="filter  absolute left-32 w-36 h-36 bg-purple-400 rounded-full md:top-4 md:w-72 md:h-72 md:left-64 mix-blend-multiplyfilter blur-2xl animate-blob"></div>
          <div className="blur-2xl absolute left-24 top-12 w-36 h-36 bg-yellow-100 rounded-full md:top-24 md:w-72 md:h-72 md:left-48 mix-blend-multiply animate-blob"></div>
          <div className="filter blur-2xl w-36 h-36 absolute bg-pink-400 rounded-full mix-blend-multiply md:w-72 md:h-72 md:left-24 animate-blob"></div>
        </div>
      </a>
      </div>
    </div>
  );
};

export default Hero;
