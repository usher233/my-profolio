import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="w-full fixed">
      <div
        id="header-wraper"
        className="items-center font-bold shadow-lg px-3 py-3 font-sans flex flex-row justify-between "
      >
        <div id="logo" className="pl-4 font-bold font-serif">
          <a href="/">VIKTOR WU</a>
        </div>
        <div className="">
          <a
            href="/about"
            className="px-3 hover:underline-offset-8 hover:underline hover:text-violet-400 transition-all"
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
            href="/projects"
            className="px-3 hover:text-red-400 transition-all"
          >
            PROJECTS
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
