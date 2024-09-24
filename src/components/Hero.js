import React from 'react';
import '../styles/Hero.css';  // You can style this component as per your design

const Hero = () => {
  return (
    <section className="hero">
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
    </section>
  );
};

export default Hero;