import { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg"
import MobilNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";


const Navbar = () => {
  const [show, setShow] = useState(null);

  const closeMenu = () => setShow(false)
  

  return (
    <>
      <nav className="mx-auto p-4 bg-amber-400 w-full">
        <div
          className="
          lg:border-b-4
          border-teal-800
          w-full
            container
            mx-auto
            flex
            item-center
            justify-between
            "
        >
          <a
            href="/"
            aria-label="Go to homepage"
            className="
        focus:outline-none
       focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-2
        ring-offset-amber-400
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:top-9
        z-50 
        hover:opacity-75
        transition-opacity
        "
          >
            <img src={logo} width="200px" className="w-36 md:w-64 lg:w-72"/>
          
          </a>

          <button
            onClick={() => { setShow(!show)}}
            className="
        lg:hidden
        hover:-translate-y-1
         hover:scale-110
         transition ease-in-out delay-25
        focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-neutral-500
        
        "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
<MainNavBar />
          {show && <MobilNavBar isMobile={true} closeMenu={closeMenu} />}
        
        </div>
      </nav>
  
    </>
);
  
};

export default Navbar;
