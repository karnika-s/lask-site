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
        <h2>Generate</h2>
        <p>
          Generate codes faster than thought. LASK.AI's generative code can save
          your time and help you create products faster.
        </p>
        <a href="/features" className="read-more">Read More ➔</a>
      </div>

        <div className="card">
          <div className="icon">
            <EditOutlinedIcon fontSize="large" />
          </div>
          <h2>Command</h2>
          <p>
            Give instructions to LASK to summarize or explain the codebase to you.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>

        <div className="card">
          <div className="icon">
            <ChatOutlinedIcon fontSize="large" />
          </div>

          <h2>Chat</h2>
          <p>
            Ask any doubts related to your files, code blocks or project and get instant and accurate answers in the chat panel.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>

        <div className="card">
          <div className="icon">
            <StarOutlineIcon fontSize="large" />
          </div>

          <h2>Context</h2>
          <p>
            LASK not only holds knowledge based on your codebase but also contains relevancy with language standards.
          </p>
          <a href="/features" className="read-more">Read More ➔</a>
        </div>
      </div>
    </div>

  );
};

export default Features;
