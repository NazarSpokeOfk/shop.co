import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand-section">
          <div className="logo">SHOP.CO</div>
          <p className="brand-description">
            We have clothes that suits your style and which you're proud to wear. 
            From women to men.
          </p>
          <div className="social-dots">
            <span className="dot active">●</span>
            <span className="dot">○</span>
            <span className="dot">○</span>
            <span className="dot">○</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>

          <div className="link-column">
            <h4>HELP</h4>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="link-column">
            <h4>FAQ</h4>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>

          <div className="link-column">
            <h4>RESOURCES</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          Shop.co © 2000-2024, All Rights Reserved
        </div>
        <div className="payment-methods">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;