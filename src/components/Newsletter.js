import React from 'react';
import '../styles/Newsletter.css'; // Import CSS for styling

const NotificationBanner = () => {
    return (
        <div className="notification-container">
            <h1>Be notified when any new update drops</h1>
            <p>We release new features every week. Be the first one to know!</p>
            <div className="email-input-section">
                <input type="email" placeholder="Type your email here" />

                {/* Download Extension Button */}
                <div className="button-container">
                    <div className="button-background"></div>
                    <a
                        // href="https://marketplace.visualstudio.com/items?itemName=skychat.lask-ai"
                        className="button"
                        title="Get Notified"
                    >
                        Get Notified
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NotificationBanner;
