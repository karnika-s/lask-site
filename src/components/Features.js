import React from 'react';
import '../styles/Features.css'; // External CSS file for styling
import myVideo from '../assets/video.mp4'; // Adjust the path as necessary
import comments from '../assets/comment.mp4';
import gen from '../assets/gen.mp4';
import fix from '../assets/fix.mp4';
import gitlab from '../assets/git.mp4';

const FuturisticTheme = () => {
    return (
        <div className="lask-container">
            {/* Features Section */}
            <section className="lask-features">
                <h2>Unlock new features with Lask AI</h2>
                <h3>Because even code needs a superhero!</h3>
                <div className="feature-list">
                    <div className="feature-item">
                        <div className="feature-description">
                            <h3>Code Generation</h3>
                            <p>
                                LASK.AI provides real-time, context-aware code generation, ensuring faster development and fewer errors.
                            </p>
                        </div>
                        <video autoPlay loop muted className="feature-video">
                            <source src={gen} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="feature-item">
                    <div className="feature-description">
                            <h3>Context based coding</h3>
                            <p>
                                Just put the repository link and get personalized context based accessibility of LASK.
                            </p>
                        </div>
                        <video  autoPlay loop muted className="feature-video">
                            <source src={gitlab} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                    <div className="feature-item">
                        <div className="feature-description">
                            <h3>Error Detection & Fixes</h3>
                            <p>
                                LASK detects and fixes the syntactical errors that occur while writing the code, thus saving time to make corrections. 
                            </p>
                        </div>
                        <video autoPlay loop muted className="feature-video">
                            <source src={fix} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="feature-item">
                    <div className="feature-description">
                            <h3>Easy Commenting</h3>
                            <p>
                                Comment or Ucomment code automatically, which makes it more hands-on and readable, and makes it easier to maintain.
                            </p>
                        </div>
                        <video autoPlay loop muted className="feature-video">
                            <source src={comments} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
 
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