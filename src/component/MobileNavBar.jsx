const MobilNavBar = (props) => {
    return (
        <div
        role="menubar"
            className="
            transition
            ease-in-out
            delay-1000
            opacity-95
            border-t-teal-900
            border-t-4
        py-64
      lg:hidden
  z-10
  w-full
  h-64
  flex  
  justify-between
  flex-col  
  pt-4
  gap-8
absolute
  right-0
  left-0
  top-16
  bg-amber-400
  shadow-xl
  text-center
  text-lg
  
  items-center
  "
      >
            <a
                onClick={()=> props.isMObile && props.closeMenu()}
          href="/"
          role="menuitem"
          className="
          px-4
          py-1
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
                onClick={()=> props.isMObile && props.closeMenu()}
          href="/"
          role="menuitem"
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
  hover:text-white
  hover:bg-teal-900
  transition-colors
  "
        >
          Contact
        </a>
            <a
                onClick={()=> props.isMObile && props.closeMenu()}
          href="/"
          role="menuitem"
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
  hover:text-white
  hover:bg-teal-900
  transition-colors"
        >
          Login
        </a>
            <a
                onClick={()=> props.isMObile && props.closeMenu()}
          href="/"
          role="menuitem"
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
  hover:text-white
  hover:bg-teal-900
  transition-colors"
        >
          Sign Up
        </a>
      </div>
    )
}

export default MobilNavBar