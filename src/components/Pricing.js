// src/components/Pricing.js
import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Free Tier</h3>
          <p>$0/month</p>
          <p>Limited features for beginners and individuals.</p>
          <button>Sign Up</button>
        </div>

      {/* <div className="pricing-card">
        <h3>Pro Tier</h3>
        <p>$19.99/month</p>
        <p>Full access to all features with priority support.</p>
        <button>Sign Up</button>
      </div> */}

        
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>Custom pricing</p>
          <p>Full access to all features with dedicated support.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
