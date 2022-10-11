import table from "../assets/table.png";

const HomeSection = () => {
  return (
    <section aria-labelledby="home" className="relative">
      <div className="flex flex-wrap-reverse gap-8 justify-center">
        <div className="flex flex-wrap flex-col items-start lg:justify-center ">
          <div className="flex flex-wrap flex-col items-start gap-2">
            <h2 className="text-4xl font-bold">Relax, you are home!</h2>
            <p className="max-w-md">
              All our supported hardware includes traditional inputs so you can
              integrate our products into your house in a way that’s best for
              everyone.
            </p>
          </div>
          <a
            href="#"
            className="
          py-2
          px-6
          bg-amber-400
         mt-4
          flex
          gap-2
          w-33
          shadow-xl
          dark:text-neutral-900
          focus:outline-none
        focus-visible:ring-2
        ring-neutral-900
        rounded-md
        ring-offset-4
        ring-offset-tranparent
        text-neutral-900
        hover:text-neutral-500
     dark:ring-amber-400
     dark:ring-offset--neutral-800
        hover:shadow-none
        transition-colors"
          >
            Sign Up
          </a>
        </div>
        <img src={table} alt="table  " />
      </div>

      <div
        className="
            absolute 
            -bottom-6 
            -right-32
            -z-10
            aspect-square
            md:border-8
            border-amber-400
            rounded-full
            md:w-64
            lg:w-96
            xl:max-w-lg
          "
      ></div>
      <div
        className="
      bg-teal-900
      h-24
      xl:h-48
      -mx-8
      mt-12
      xl:mt-0
      xl:absolute
      lg:w-screen
      -bottom-8
      -z-10
 overflow-hidden"
      ></div>
    </section>
  );
};

export default HomeSection;
