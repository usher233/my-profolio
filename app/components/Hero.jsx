const Hero = () => {
  return (
    <div className="relative w-full max-w-lg translate-y-60">
      <a href="https://github.com/usher233">
        <div id="blur-light" className="translate-x-40">
          <div className="filter blur-2xl absolute bg-purple-300 rounded-full top-0 w-72 h-72 -left-4 mix-blend-multiplyfilter blur-2xl animate-blob"></div>
          <div className="filter blur-2xl absolute bg-yellow-300 rounded-full top-0 w-72 h-72 -right-4 mix-blend- filter blur-2xl animate-blob"></div>
          <div className="filter blur-2xl absolute bg-pink-300 rounded-full mix-blend-multiply w-72 h-72 left-20 animate-blob"></div>
        </div>
      </a>
    </div>
  );
};

export default Hero;
