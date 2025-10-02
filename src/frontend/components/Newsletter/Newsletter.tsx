import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email address" className="email-input" />
          <button className="subscribe-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;