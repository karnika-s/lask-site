import { useState } from "react";
import ThreeCanvas from './ThreeCanvas'; // Adjust the path accordingly
import '../styles/site2.css';  // You can add custom styles in Navbar.css


const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
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
        
            </nav>
          </div>

          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
            </nav>
          )}
        </div>
      </header>

<section className="relative py-0 bg-black sm:pb-16 lg:pb-20 xl:pb-24 gap-y-0">
  <div className="px-4 mx-auto max-w-7xl">
    <div className="flex flex-col items-center gap-y-0">
      <h3 className="text-3xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-6xl">
        Transform Your Development Workflow with 
      </h3>

      <h3 className="main-heading py-3 text-3xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-6xl">
        LASK.AI
        </h3>

      <p className="py-0 mt-4 text-lg font-normal text-gray-400 sm:mt-8 text-center px-20 sm:px-20">
        From real-time code generation to smart debugging, LASK AI provides intelligent, context-aware suggestions that
        accelerate project delivery while enhancing code quality.
      </p>

      <div className="relative hidden md:inline-flex">
  <div className="mt-8 absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg"></div>
  
  <a 
    href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"  //extension mrktplace link
    className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full mt-8" // Add mt-8 for margin top"
    title="Download Extension"
  >
    Download Extension
  </a>
</div>  


{/* necessary method */}
      <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
        <div className="relative">
          <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6">
              {/* You can add input elements or icons here if needed */}
            </div>
          </div>
        </div>
      </form>

      {/* Canvas component below the form */}
      <div className="py-0 mt-0">
      <div className="flex justify-center ">
        <ThreeCanvas />
      </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  );
};

export default Hero;
