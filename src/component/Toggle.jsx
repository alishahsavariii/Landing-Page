import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div>
        {theme === "dark" ? (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className=" px-4
            py-1
      
         dark:text-neutral-900
         focus:outline-none
       focus-visible:ring-2
       ring-neutral-900
       rounded-md
       ring-offset-4
       ring-offset-amber-400
       text-neutral-900
       hover:text-neutral-100
       hover:bg-teal-900
       hover:dark:text-neutral-100
       transition-colors"
          >
      
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        
              className="
           
            px-4
            py-1
      
         dark:text-neutral-900
         focus:outline-none
       focus-visible:ring-2
       ring-neutral-900
       rounded-md
       ring-offset-4
       ring-offset-amber-400
       text-neutral-900
       hover:text-neutral-100
       hover:bg-teal-900
       hover:dark:text-neutral-100
       transition-colors
           "
          >
              <svg
             
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
              </svg>
           
          </button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Toggle;
