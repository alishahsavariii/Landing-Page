import lamp from "../assets/lamp.png";
import app from "../assets/app.svg";

const Form = () => {
  return (
    <>
      <section
        aria-labelledby="contact"
        className="container mx-auto px-8 overflow-hidden"
      >
        <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20 ">
          <div className=" md:flex-1 md:max-w-sm relative lg:pt-0 md:pt-2 xl:pt-8">
            <img src={lamp} alt="lamp" className="
            rounded-md
             dark:shadow-amber-500
             
            dark:border-none
             mx-auto pt-0
            " />
            <a
              href="#"
              className="
          py-2
          px-6
          bg-amber-400
          w-max
          mx-auto
          mt-12
          md:mb-12
          flex
          gap-2
          shadow-xl
          dark:text-neutral-900
          focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-transparent
        text-neutral-900
        hover:text-neutral-500
     dark:ring-amber-400
     dark:ring-offset--neutral-800
        hover:shadow-none
        transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="  h-6 mx-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span className="mx-auto">Download The App</span>
            </a>
            <img
              src={app}
              alt="app"
              width='240'
              className="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
            />
            <div 
            class="
              absolute
              -bottom-18
              left-1/2
              -translate-x-1/2
              -z-10
              aspect-square
              md:border-8
              border-amber-400
              rounded-full
              md:w-72
              lg:w-96
              
            ">
          </div>
            </div>
        
          <form
            className="
            relative
            shadow-xl
  border-8
  border-neutral-900
  dark:border-teal-900
  p-6
  rounded-lg
  grid
  gap-8
  md:flex-1
  md:max-w-lg
  my-8
  md:my-12
  lg:my-16
  bg-white
  dark:bg-neutral-800
  w-full
  "
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Let's Connect</h2>
            <div className="relative">
            <input
              type="text"
              className="
              peer 
              form-input
              w-full
              border-4
            border-amber-400
           
              rounded-md
              focus:ring-4
              dark:focus:ring-offset-2
              focus:ring-amber-400
              focus:border-amber-400
              focus:outline-none
              dark:bg-amber-400
              dark:text-neutral-900
              placeholder-transparent "
              placeholder="Youre Name"
            />

            <label
              for="name"
              className="
                 text-neutral-500
                  text-sm 
                  font-bold
                  uppercase
                  absolute
                  -top-8
                  ml-2
                  -translate-y-1/2
                  transition-all
                  duration-300
                  focus:ring-amber-500
                  peer-placeholder-shown:left-2
                  peer-placeholder-shown:top-6
                peer-placeholder-shown:text-neutral-900
                  peer-focus:-top-4 
                  peer-focus:left-0
                peer-focus:text-neutral-600
                dark:peer-focus:text-neutral-300"
            >
              Your Name . . .
            </label>
            </div>
            <div className="relative" >
            <input
              type="email"
              className="
              peer 
              form-input
              my-8
              w-full
              border-4
            border-amber-400
           
              rounded-md
              focus:ring-4
              dark:focus:ring-offset-2
              focus:ring-amber-400
              focus:border-amber-400
              focus:outline-none
              dark:bg-amber-400
              dark:text-neutral-900
              placeholder-transparent "
              placeholder="Youre Name"
            />

            <label
              for="name"
              className="
                 text-neutral-500
                  text-sm 
                  font-bold
                  uppercase
                  absolute
                  ml-2
                  duration-300
                  items-center
                  translate-y-20
                  transition-all
                  focus:ring-amber-400
                  peer-placeholder-shown:left-2
                  peer-placeholder-shown:-top-8
                peer-placeholder-shown:text-neutral-900
                  peer-focus:-top-2/3
                  peer-focus:left-0
                peer-focus:text-neutral-600
                dark:peer-focus:text-neutral-300"
            >
              Your email . . .
              </label>
            </div>
            <div class="relative">
        <textarea name="content" id="content" cols="20" rows="5" 
        class="
          peer
          form-textarea
          resize-none
          w-full
          border-4
          border-amber-400
          rounded-md
          focus:ring-4
          dark:focus:ring-offset-2
          focus:ring-amber-400
          focus:border-amber-400
          focus:outline-none
          dark:bg-amber-400
          dark:text-neutral-900
          placeholder-transparent
        " 
        placeholder="How can we help?"></textarea>
        <label for="content" 
          class="
            text-neutral-500
            text-sm
            font-bold
            uppercase
            absolute
            -top-3
            left-2
            -translate-y-1/2
            transition-all
            peer-placeholder-shown:left-4
            peer-placeholder-shown:top-6
            peer-placeholder-shown:text-neutral-900
            peer-focus:-top-4
            peer-focus:left-2
            peer-focus:text-neutral-600
            dark:peer-focus:text-neutral-300
            
          ">
            How can we help?
        </label>
            </div>
            <a role="menuitem" 
        class="
          py-2
          px-6
          bg-teal-900
          text-white
          w-max
          shadow-xl
          hover:shadow-none
          transition-shadow
          focus:outline-none
          focus-visible:ring-4
          ring-neutral-900
          rounded-md
          ring-offset-4
          ring-offset-white
          dark:ring-offset-amber-400
        " 
        href="/"
        >
        Sign Up
        </a>
            </form>
          
        </div>
      </section>
    </>
  );
};

export default Form;
