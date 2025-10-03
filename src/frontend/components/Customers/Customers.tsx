import React from 'react';
import './Customers.css';

const Customers = () => {
  return (
    <div className="customers">
      <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
      
      <div className="reviews-grid">
        <div className="review-card">
          <div className="review-header">
            <span className="customer-name">Sarah M.</span>
            <span className="rating-dot">●</span>
            <div className="stars">★★★★★</div>
          </div>
          <p className="review-text">
            I'm blown away by the quality and style of the clothes I received from Shop.co. 
            From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.
          </p>
        </div>
        
        <div className="review-card">
          <div className="review-header">
            <span className="customer-name">Alex K.</span>
            <span className="rating-dot">●</span>
            <div className="stars">★★★★★</div>
          </div>
          <p className="review-text">
            Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
            The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
          </p>
        </div>
        
        <div className="review-card">
          <div className="review-header">
            <span className="customer-name">James L.</span>
            <span className="rating-dot">●</span>
            <div className="stars">★★★★★</div>
          </div>
          <p className="review-text">
            As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. 
            The selection of clothes is not only diverse but also on-point with the latest trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;