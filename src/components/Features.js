import React from 'react';
import '../styles/Features.css'; // External CSS file for styling
import myVideo from '../assets/video.mp4'; // Adjust the path as necessary

const FuturisticTheme = () => {
    return (
        <div className="lask-container">
            {/* Features Section */}
            <section className="lask-features">
                <h2>Because even code needs a superhero!</h2>
                <h3>Unlock new features with Lask AI</h3>
                <div className="feature-list">
                    <div className="feature-item">
                        <div className="feature-description">
                            <h3>Code Completion</h3>
                            <p>
                                LASK.AI provides real-time, context-aware code completions, ensuring faster development and fewer errors.
                            </p>
                        </div>
                        <video autoPlay loop muted className="feature-video">
                            <source src={myVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="feature-item reverse">
                        <video  autoPlay loop muted className="feature-video">
                            <source src={myVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="feature-description">
                            <h3>Code Suggestions & Refactoring</h3>
                            <p>
                                Boost your code quality with intelligent suggestions, syntax fixes, and performance-optimizing refactoring.
                            </p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-description">
                            <h3>Error Detection & Fixes</h3>
                            <p>
                                Detect potential bugs and security vulnerabilities instantly, with guided fixes for optimized code.
                            </p>
                        </div>
                        <video autoPlay loop muted className="feature-video">
                            <source src={myVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="feature-item reverse">
                        <video autoPlay loop muted className="feature-video">
                            <source src={myVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="feature-description">
                            <h3>Automated Comments & Documentation</h3>
                            <p>
                                Automatically generate comments and documentation, simplifying code readability and project handoffs.
                            </p>
                        </div>
                    </div>
                </div>

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
            </section>

        </div>
    );
};

export default FuturisticTheme;
