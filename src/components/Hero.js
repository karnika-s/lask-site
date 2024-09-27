import React, { useState, useRef } from 'react'; // Import useRef with useState

import ThreeCanvas from './ThreeCanvas'; // Adjust the path accordingly
import '../styles/Hero.css';  // Custom styles for the component
import HeroVideoDialog from './magicui/Video'; // Adjust the path accordingly
// import AnimatedBeamMultipleOutputDemo from './magicui/Tree.ts';
// import {AnimatedBeam} from './magicui/Tree'; // Adjust the path accordingly

import Newsletter from "./Newsletter"
import Short from "./Short"




const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Create refs for AnimatedBeam
  const beamStartRef = useRef(null);
  const beamEndRef = useRef(null);
  const containerRef = useRef(null); // To hold the container reference

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
            <div className="py-0 mt-0">
              <div className="flex justify-start">
                <ThreeCanvas />
              </div>
            </div>
          </div>
        </div>     
      </section>
       {/* <Short/> */}
      {/* <section>
        <Short/>
        </section> */}

      {/* additional components */}

      <section >
        <Newsletter/>
      </section>
    </>
  );
};

export default Hero;




