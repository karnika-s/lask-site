import { useState } from "react";
import ThreeCanvas from './ThreeCanvas'; // Adjust the path accordingly

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt="Company Logo"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label="Toggle Navigation"
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden space-x-10 lg:ml-20 lg:space-x-12 md:flex">
              <div className="relative hidden md:inline-flex">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg"></div>
                <a
                  href="#"
                  title="Start free trial"
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                >
                  Start free trial
                </a>
              </div>
            </nav>
          </div>

          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Products
              </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Features
              </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Pricing
              </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                Support
              </a>
              <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full">
                Start free trial
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Connecting Devs with Employers
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
              </p>

              <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Try Java Developer, React Dev etc."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="flex mt-4 sm:absolute sm:right-1.5 sm:inset-y-1.5 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Find A Developer
                  </button>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 50k+ users
                </p>
              </div>
            </div>

            {/* Right column for ThreeCanvas */}
            <div className="flex justify-center">
              <ThreeCanvas />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
