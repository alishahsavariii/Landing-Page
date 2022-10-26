import dots from "../assets/dots.svg";
import partner1 from "../assets/partner1.svg"
import partner2 from "../assets/partner2.svg"
import partner3 from "../assets/partner3.svg"
import partner4 from "../assets/partner4.svg"
import partner5 from "../assets/partner5.svg"
import partner6 from "../assets/partner6.svg"
import partner7 from "../assets/partner7.svg"






const Card = () => {
  return (
    <main
          className="
         dark:text-neutral-200
      pt-16
        geid
        gap-12
        sm:gap-16
        md:gap-24
        lg:gap-32
        px-8
        overflow-hidden
        "
    >
      <a
        href="#"
        className="
          py-2
          px-6
          bg-amber-400
          mx-auto
          my-12
          flex
          gap-2
          w-64
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
      <section
        aria-labelledby="qualities"
        className="
              relative
pt-16
              "
      >
        <img
          src={dots}
          aria-hidden="true"
          className="
              hidden
              lg:block
              absolute
              top-1/2
              -translate-y-1/2
              -left-24
              xl:-left-7
              "
        />
        <img
          src={dots}
          aria-hidden="true"
          className="
              hidden
              lg:block
              absolute
              top-1/2
              -translate-y-1/2
              -right-24
              xl:-right-7
              "
        />
        <h2 className="sr-only">Our Qualities</h2>
        <div
          className="container
        mx-auto
        max-w-5xl
        flex
        gap-12
        flex-wrap
        items-start
        justify-center
        md:justify-between
        "
        >
          <div
            className="
          
          grid
          justify-items-center
          text-center
          md:flex-1
          "
          >
            <div
              className="
            rounded-full
            border-8
            border-amber-400
            p-4
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Our products are secure and private out-of-the-box</p>
          </div>
          <div
            className=" grid justify-items-center text-center md:flex-1
          
         
          "
          >
            <div
              className="
            rounded-full
            border-8
            border-amber-400
            p-4
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Efficient</h3>
            <p>Feel good about your wallet and the environment</p>
          </div>
          <div
            className="
          
          grid
          justify-items-center
          text-center
          md:flex-1
          "
          >
            <div
              className="
            rounded-full
            border-8
            border-amber-400
            p-4
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-14 h-14"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">Proven</h3>
            <p>Leading the Smart Home world fo 10 years </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="partners"
        className="
          text-center
          grid
          gap-8 
          place-items-center
          "
      >
        <div className="grid gap-4 pt-16">
          <h2 className="text-4xl font-bold text-amber-400">Our Partners</h2>
          <p className="w-full maw-w-lg">
            We’ve partnered with hundreds of smart home brands to help you
            create a smart home that fits your needs and doesn’t lock you in.
          </p>
              </div>
              <div className="pt-16 flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner1} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner2} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner3} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner4} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner5} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner6} alt="partner"
                      className="h-16 w-16" />
                  </div>
                  <div className="p-4 bg-white dark:bg--neutral-600 shadow-md dark:shadow-xl rounded-md">
                      <img src={partner7} alt="partner"
                      className="h-16 w-16" />
                  </div>
              </div>
          </section>
          
    </main>
  );
};

export default Card;
