import { useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <nav className="mx-auto p-4 bg-amber-400">
        <div
          className="
          
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
            <img src={logo} width="200px" height="10px"/>
          
          </a>

          <button
            onClick={() => {
              setShow(!show);
            }}
            className="
        lg:hidden
        focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-neutral-500
        transition-colors
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

          {show ? (
            <div
              role="menubar"
              className="
              // transition
              // ease-out
              // duration-700
              z-40
              w-full
              flex-col
        lg:flex-row
        gap-4
        absolute
        right-0
        left-0
        top-16
        bg-amber-400
        shadow-xl
        text-center
        text-lg
        p-6
        items-center
        lg:flex
        lg:static
        lg:shadow-none
        lg:justify-between
        lg:w-full
        "
            >
              <a
                href="/"
                role="menuitem"
                className="
        py-1
        px-6
      dark:text-neutral-900
        focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        text-neutral-900
        hover:text-white
        hover:bg-teal-900
        transition-colors"
              >
                Home
              </a>
              <a
                href="/"
                role="menuitem"
                className="
          py-1
          px-6
          dark:text-neutral-900
          focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-white
        hover:bg-teal-900
        transition-colors
        "
              >
                Contact
              </a>
              <a
                href="/"
                role="menuitem"
                className="
          py-1
          px-6
          dark:text-neutral-900
          focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-white
        hover:bg-teal-900
        transition-colors"
              >
                Login
              </a>
              <a
                href="/"
                role="menuitem"
                className="
          py-1
          px-6
          dark:text-neutral-900
          focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-white
        hover:bg-teal-900
        transition-colors"
              >
                Sign Up
              </a>{" "}
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
