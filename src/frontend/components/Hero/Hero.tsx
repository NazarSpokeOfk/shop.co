import React from 'react';
import './Hero.css';
import heroBg from '../../../assets/images/Rectangle.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{backgroundImage: `url(${heroBg})`}}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="hero-description">
            Browse through our diverse range of methodology crafted garments, 
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="shop-now-btn">
            Shop Now
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">International Brands</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2,000+</div>
            <div className="stat-label">High-Quality Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30,000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;