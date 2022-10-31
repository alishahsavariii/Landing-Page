import app from "../assets/app.svg";
import couch from "../assets/couch.png";

const Header = () => {
  return (
    <header
      className="
    relative
     pt-16
     md:pt-24
      lg:pt-48
      
      "
    >
      <div
        className="
      absolute
      inset-0
      bottom-8
      md:bottom-24
      xl:bottom-32
      -z-10
      bg-gradient-to-b
      from-amber-400
      to-amber-600
      dark:bg-gradient-to-b
      dark:from-amber-600
      dark:to-amber-900
      "
      ></div>
      <div
        className="
      container
      mx-auto
      grid
      grid-rows-1
      place-items-end
      px-2
      "
      >
        <img
          
          src={couch}
          className="row-start-1 row-end-2 col-start-1 col-end-2 mx-auto "
          alt="couch"
        />

        <img
          src={app}
          className="dark:shadow-amber-500 dark:shadow-lg dark:rounded-md row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:65 lg:w-72 "
          alt="app"
        />
      </div>
    </header>
  );
};

export default Header;
