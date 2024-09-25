import { useState } from "react";
import ThreeCanvas from './ThreeCanvas'; // Adjust the path accordingly
import '../styles/Hero.css';  // Custom styles for the component

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="hero-header">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              {/* Logo or Branding if needed */}
            </div>

            {/* Mobile Hamburger Menu */}
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

            {/* Desktop Navigation Links */}
            <nav className="hidden space-x-10 lg:ml-20 lg:space-x-12 md:flex">
              {/* Add your navigation links here */}
            </nav>
          </div>

          {/* Mobile Navigation Links */}
          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
              {/* Add your mobile navigation links here */}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h3 className="hero-title">
              Transform Your Development Workflow with
            </h3>

            <h3 className="main-heading typewriter">
              LASK.AI
            </h3>

            <p className="hero-description">
              From real-time code generation to smart debugging, LASK AI provides intelligent, context-aware suggestions that
              accelerate project delivery while enhancing code quality.
            </p>

            {/* Download Extension Button */}
            <div className="button-container">
  <div className="button-background"></div>
  <a 
    href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"
    className="button"
    title="Download Extension"
  >
    Download Extension
  </a>
</div>

            {/* Canvas Component */}
            <div className="py-0 mt-0">
              <div className="flex justify-center">
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




// import { useState } from "react";
// import ThreeCanvas from './ThreeCanvas'; 
// import { GlobeDemo } from './GlobeDemo';  // Import the GlobeDemo component
// import '../styles/Hero.css';  

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <>
//       <div className="relative h-screen w-screen"> {/* Full screen container to hold everything */}
        
//         {/* Globe Demo as background */}
//         {/* <GlobeDemo className="absolute inset-0 z-0" />  */}
//         {/* The z-0 ensures the globe stays in the background */}
        
//         <header className="hero-header z-10 relative"> {/* z-10 to ensure it's above the globe */}
//           <div className="container">
//             <div className="flex items-center justify-between">
//               {/* Mobile Hamburger Menu */}
//               <div className="flex md:hidden">
//                 <button
//                   type="button"
//                   className="text-white"
//                   onClick={() => setExpanded(!expanded)}
//                   aria-expanded={expanded}
//                   aria-label="Toggle Navigation"
//                 >
//                   {/* Add SVG for hamburger menu */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         <section className="hero-section z-10 relative"> {/* z-10 to ensure it's above the globe */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center"> {/* Centering content */}
//             <h2 className="hero-title text-white">
//               Transform Your Development Workflow with
//             </h2>

//             <h2 className="main-heading text-white">
//               LASK.AI
//             </h2>

//             <p className="hero-description text-white">
//               From real-time code generation to smart debugging, LASK AI provides intelligent, context-aware suggestions that
//               accelerate project delivery while enhancing code quality.
//             </p>

//             <div className="relative hidden md:inline-flex">
//               <a 
//                 href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"
//                 className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full mt-8"
//                 title="Download Extension"
//               >
//                 Download Extension
//               </a>
//             </div>

//             {/* Canvas Component */}
//             <div className="py-0 mt-0">
//               <div className="flex justify-center">
//                 <ThreeCanvas />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Hero;




// import { useState } from "react";
// import ThreeCanvas from './ThreeCanvas'; 
// import { GlobeDemo } from './GlobeDemo';  // Import the GlobeDemo component
// import '../styles/Hero.css';  

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <>
//       <div className="relative w-screen flex flex-col justify-start items-center"> {/* Adjust height to fit content naturally */}
        
//         {/* Navigation / Header */}
//         <header className="hero-header w-full fixed top-0 z-10"> {/* Fixed header, always on top */}
//           <div className="container">
//             <div className="flex items-center justify-between">
//               {/* Mobile Hamburger Menu */}
//               <div className="flex md:hidden">
//                 <button
//                   type="button"
//                   className="text-white"
//                   onClick={() => setExpanded(!expanded)}
//                   aria-expanded={expanded}
//                   aria-label="Toggle Navigation"
//                 >
//                   {/* Add SVG for hamburger menu */}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Content Section */}
//         <section className="hero-section z-10 flex flex-col items-center justify-center mt-28"> {/* Added margin to prevent overlap with navbar */}
          
//           {/* Heading Section */}
//           <div className="text-center">
//             <h2 className="hero-title text-white">
//               Transform Your Development Workflow with
//             </h2>

//             <h2 className="main-heading text-white">
//               LASK.AI
//             </h2>

//             <p className="hero-description text-white">
//               From real-time code generation to smart debugging, LASK AI provides intelligent, context-aware suggestions that
//               accelerate project delivery while enhancing code quality.
//             </p>

//             {/* Button Section */}
//             <div className="relative hidden md:inline-flex">
//               <a 
//                 href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"
//                 className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full mt-8"
//                 title="Download Extension"
//               >
//                 Download Extension
//               </a>
//             </div>
//           </div>

//           {/* Globe Section */}
//           <div className="mt-10 flex justify-center items-center"> {/* Ensure the globe stays centered */}
//             <div className="relative">
//               <GlobeDemo className="w-[300px] h-[300px] z-10" /> {/* Set an appropriate size for the globe */}
//             </div>
//           </div>

//           {/* Robot Section */}
//           <div className="mt-10 flex justify-center items-center"> {/* Keep the robot below the globe */}
//             <ThreeCanvas /> {/* Robot model */}
//           </div>

//         </section>
//       </div>
//     </>
//   );
// };

// export default Hero;

