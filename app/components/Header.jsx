import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="w-full fixed bg-white z-50">
      <div
        id="header-wraper"
        className="items-center font-bold shadow-lg px-3 py-3 font-serif flex flex-row justify-between "
      >
        <div id="logo" className="pl-4 font-bold font-serif">
          <a href="/"><span className="text-blue-500">V</span>IKTOR <span className="text-red-500">W</span>U</a>
        </div>
        <div className="gap-4 hidden lg:block">
          <a
            href="/about"
            className="px-3 hover:text-violet-400 transition-all"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="px-3 hover:text-cyan-400 transition-all"
          >
            CONTACT
          </a>
          <a
            href="https://github.com/usher233"
            className="px-3 hover:text-red-400 transition-all"
          >
            PROJECTS
          </a>
        </div>
        <div className="my-2">
          <a
            className=" p-4 hover:text-white hover:bg-black rounded-2xl text-black bg-white transition-all"
            href="/"
          >
            Search<span className="bg-gradient-to-r from-cyan-500 via-violet-500 to-green-500 bg-clip-text text-transparent "> Something Fun</span> ? 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
