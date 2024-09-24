import React, { useState } from 'react';
import '../styles/Trending.css';

const features = [
  {
    title: 'Auto Code Generation',
    description: 'Generate code with a single prompt.'
  },
  {
    title: 'Code Fixing',
    description: 'Automatically debug and optimize code.'
  },
  {
    title: 'Multilingual Support',
    description: 'Supports Python, JavaScript, and more.'
  },
  {
    title: 'VS Code Integration',
    description: `A Visual Studio Code (VS Code) extension enhances the capabilities of the popular text editor by adding additional features tailored to developers’ 
    needs. Extensions can range from simple productivity tools, such as linters and code formatters, to complex integrations.`
  }
];

const Trending = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);  // Track the index of the flipped card

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="trending">
      <h2 className="trending-title">Key Features</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{feature.title}</h3>
              </div>
              <div className="card-back">
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
