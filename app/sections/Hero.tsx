const Hero = () => {
  return (
    <div className="">
    <div className="relative w-full  translate-y-60">
      <a href="https://github.com/usher233">
        <div id="blur-light" className="">
          <div className="filter  absolute bg-purple-400 rounded-full top-4 w-72 h-72 left-64 mix-blend-multiplyfilter blur-2xl animate-blob"></div>
          <div className="blur-2xl absolute bg-yellow-100 rounded-full top-24 w-72 h-72 left-48 mix-blend-multiply animate-blob"></div>
          <div className="filter blur-2xl absolute bg-pink-400 rounded-full mix-blend-multiply w-72 h-72 left-24 animate-blob"></div>
        </div>
      </a>
      </div>
    </div>
  );
};

export default Hero;
