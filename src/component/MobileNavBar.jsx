const MobilNavBar = (props) => {
    return (
        <div
        role="menubar"
        className="

            opacity-95
            dark:opacity-100
            border-t-teal-900
            dark:border-neutral-100
            border-t-4
        py-64
      lg:hidden
  z-10
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
  dark:bg-neutral-800
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
 
  focus:outline-none
  focus-visible:ring-2
  ring-neutral-900
  rounded-md
  text-neutral-900
  hover:text-neutral-100
  hover:bg-teal-900
  hover:dark:text-neutral-100
  transition-colors
  dark:text-neutral-100
  "

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
  transition-color
  dark:text-neutral-100
  s

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
  dark:text-neutral-100
  "

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
  dark:text-neutral-100
  "

        >
          Sign Up
        </a>
      </div>
    )
}

export default MobilNavBar