import React from 'react';
import '../styles/Short.css';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Features = () => {
  return (
    <div id='heading'>
      <h3>Features</h3>
      <div className="ShortContainer">

      <div className="card">
        <div className="icon">
          <BoltOutlinedIcon fontSize="large" />
        </div>
        <h2>Autocomplete</h2>
        <p>
          Autocomplete faster than thought. LASK.AI's generative code can save
          you time and help you ship products faster.
        </p>
        <a href="/features" className="read-more">Read More ➔</a>
      </div>

        <div className="card">
          <div className="icon">
            <EditOutlinedIcon fontSize="large" />
          </div>
          <h2>Command</h2>
          <p>
            Give instructions in your editor to perform inline refactors, generate
            code, add comments, or something even more complex.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>

        <div className="card">
          <div className="icon">
            <ChatOutlinedIcon fontSize="large" />
          </div>

          <h2>Chat</h2>
          <p>
            Generate boilerplate, refactor code, add documentation, explain code,
            suggest bug fixes, and so much more.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>

        <div className="card">
          <div className="icon">
            <StarOutlineIcon fontSize="large" />
          </div>

          <h2>Context</h2>
          <p>
            All of LASK.AI's features are powered by industry-leading context
            awareness and reasoning engine.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>
      </div>
    </div>

  );
};

export default Features;
