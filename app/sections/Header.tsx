import AnimatedTabs from '../components/AnimatedTabs'

const Header = () => {
  return (
    
    <div className="w-full fixed bg-white/90 z-50">
      <div
        id="header-wraper"
        className="items-center font-bold shadow-lg px-3 py-3 font-serif flex flex-row justify-between "
      >
        <div id="logo" className="pl-4 font-bold font-serif">
          <a href='/' className='bg-gradient-to-r from-cyan-500 via-violet-500 to-orange-500 bg-clip-text text-transparent' ><span className="text-blue-500">V</span>IKTOR <span className="text-red-500">W</span>U</a>
        </div>
        
        <div className="hidden lg:block">
        <AnimatedTabs />
        </div>
        <div className="my-2">
          <a
            className=" p-4 hover:text-white hover:bg-black rounded-2xl text-black bg-white transition-all"
            href="/"
          >
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
