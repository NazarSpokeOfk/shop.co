import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
  const subtotal = 565;
  const discount = 113;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="order-summary">
      <h2 className="summary-title">Order Summary</h2>
      
      <div className="summary-details">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        
        <div className="summary-row discount">
          <span>Discount (-20%)</span>
          <span>-${discount}</span>
        </div>
        
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        
        <div className="summary-total">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      
      <div className="promo-code">
        <input 
          type="text" 
          placeholder="Add promo code"
          className="promo-input"
        />
        <button className="apply-btn">Apply</button>
      </div>
      
      <button className="checkout-btn">
        Go to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;