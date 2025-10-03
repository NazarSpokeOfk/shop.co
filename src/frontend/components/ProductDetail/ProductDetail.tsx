import React from 'react';
import './ProductDetail.css';
// Импортируем основную картинку товара
import mainImage from '../../../assets/images/main.png';

const ProductDetail = () => {
  return (
    <section className="product-detail">
      <div className="product-container">
        {/* Галерея товара - только основное изображение */}
        <div className="product-gallery">
          <div className="main-image">
            <img 
              src={mainImage} 
              alt="ONE LIFE GRAPHIC T-SHIRT"
              className="product-img"
            />
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
          
          <div className="product-pricing">
            <span className="current-price">$250</span>
            <span className="original-price">$300</span>
            <span className="discount">-50%</span>
          </div>
          
          <p className="product-description">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            breatheable fabric, it offers superior comfort and style.
          </p>
          
          <div className="product-options">
            <div className="option-group">
              <h3 className="option-title">Select Colors</h3>
              <div className="color-options">
                <button className="color-option black active"></button>
                <button className="color-option white"></button>
                <button className="color-option gray"></button>
              </div>
            </div>
            
            <div className="option-group">
              <h3 className="option-title">Choose Size</h3>
              <div className="size-options">
                <button className="size-option">Small</button>
                <button className="size-option active">Medium</button>
                <button className="size-option">Large</button>
                <button className="size-option">X-Large</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;