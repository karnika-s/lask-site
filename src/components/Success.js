import React from 'react';
import '../styles/Success.css'; // Import the CSS file

const TokenSent = () => {
    return (
        <div className="success-container">
            <h1 className="message">
                The login token has been sent via email. You can now close this and head back to VS Code.
            </h1>
        </div>
    );
};

export default TokenSent;
