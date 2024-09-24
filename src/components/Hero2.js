import React from 'react';
import '../styles/Hero2.css';  // Custom styles for the hero section
import { Canvas } from '@react-three/fiber'; // Import Canvas from react-three-fiber
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls
import RobotFace from './RobotFace';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="earth-container">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 1, 1]} intensity={1} />
            <RobotFace />
            <OrbitControls /> {/* Add OrbitControls for user interaction */}
          </Canvas>
        </div>

        {/* Text content on the right */}
        <div className="hero-text">
          <h2>Transform Your Development Workflow with LASK AI</h2>
          <p>
            Supercharge your coding experience with LASK AI, the enterprise-grade assistant built to boost developer productivity.
            From real-time code generation to smart debugging, LASK AI provides intelligent, context-aware suggestions that
            accelerate project delivery while enhancing code quality.
          </p>
          <p>
            Whether you're working with legacy codebases or starting fresh, LASK AI offers comprehensive insights, automated
            documentation, and seamless integration into your development environment, ensuring scalability, security, and
            performance.
          </p>
          <a href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai" className="btn-cta">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
