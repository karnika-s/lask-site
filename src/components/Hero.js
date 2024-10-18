import React, { useState, useRef } from 'react'; // Import useRef with useState

import ThreeCanvas from './ThreeCanvas'; // Adjust the path accordingly
import '../styles/Hero.css';  // Custom styles for the component
import HeroVideoDialog from './magicui/Video'; // Adjust the path accordingly
// import AnimatedBeamMultipleOutputDemo from './magicui/Tree.ts';
// import {AnimatedBeam} from './magicui/Tree'; // Adjust the path accordingly

import Newsletter from "./Newsletter";
import BoxReveal from "./magicui/Reveal"; // Ensure correct import path
// import SparklesText from "./magicui/Sparkle";
import { SparklesText } from './magicui/Sparkle';



const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Create refs for AnimatedBeam
  const beamStartRef = useRef(null);
  const beamEndRef = useRef(null);
  const containerRef = useRef(null); // To hold the container reference

  return (
    <>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="flex flex-col items-center">
            <h3 className="hero-title">
              Transform Your Development Workflow with
            </h3>

                {/* Replacing the LASK.AI heading with SparklesText */}
                <h3 className="main-heading typewriter">
              <SparklesText text="LASK.AI" />
            </h3>
            
            <p className="hero-description">
              From real-time code generation to smart fixing, LASK AI provides intelligent, context-aware outputs that
              accelerate project delivery while enhancing code quality.
            </p>

            {/* Download Extension Button */}
            <div className="button-container">
  <div className="button-background"></div>
  <a 
    href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"
    className="button"
    title="Download Extension"
    target='_blank'
  >
    Download Extension
  </a>
</div>


{/* <p> we have video component here</p> */}
             {/* Video Dialog Trigger */}
          <div onClick={() => setIsVideoOpen(true)} className="cursor-pointer">
        <span className="text-white">

        </span>
      </div>

      {/* HeroVideoDialog Component */}
      <HeroVideoDialog
        videoSrc="https://www.youtube.com/embed/2TqRJQR4AgQ?si=An2pEZojWiYPGnOo"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
        animationStyle="from-center"
        className="my-4"
      /> 

      {/* add beam here  */}
        {/* Positioning the refs */}
        {/* <div ref={beamStartRef} className="absolute" style={{ top: '50px', left: '50px' }}></div>
          <div ref={beamEndRef} className="absolute" style={{ top: '300px', left: '300px' }}></div> */}

          {/* Add the AnimatedBeam component */}
          {/* <AnimatedBeam  */}
            {/* // containerRef={containerRef} 
            // fromRef={beamStartRef} 
            // toRef={beamEndRef} 
            // className="absolute z-20" // Adjust z-index to ensure it appears above other elements */}
          {/* /> */}

            {/* Canvas Component */}
            {/* <div className="py-0 mt-0">
              <div className="flex justify-start">
                <ThreeCanvas />
              </div>
            </div> */}
          </div>
        </div>     
      </section>
    </>
  );
};

export default Hero;




