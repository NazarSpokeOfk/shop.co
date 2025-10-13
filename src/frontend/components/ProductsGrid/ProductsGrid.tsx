import React from 'react';
import './ProductsGrid.css';
// Импортируем картинки товаров
import gradientTshirt from '../../../assets/images/gradient-graphic-tshirt.png';
import poloTipping from '../../../assets/images/polo-tipping-details.png';
import blackStriped from '../../../assets/images/black-striped-tshirt.png';
import skinnyJeans from '../../../assets/images/skinny-fit-jeans.png';
import checkeredShirt from '../../../assets/images/checkered-shirt.png';
import sleeveStriped from '../../../assets/images/steve-striped-tshirt.png';
import verticalShirt from '../../../assets/images/vertical-striped-shirt.png';
import courageTshirt from '../../../assets/images/courage-graphic-tshirt.png';
import bermudaShorts from '../../../assets/images/loose-fit-bermuda-shorts.png';

const ProductsGrid = () => {
  const products = [
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, image: gradientTshirt },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: poloTipping },
    { id: 3, name: "Black Striped T-shirt", price: 120, originalPrice: 150, image: blackStriped },
    { id: 4, name: "Skinny Fit Jeans", price: 240, originalPrice: 260, image: skinnyJeans },
    { id: 5, name: "Checkered Shirt", price: 180, image: checkeredShirt },
    { id: 6, name: "Sleeve Striped T-shirt", price: 130, originalPrice: 160, image: sleeveStriped },
    { id: 7, name: "Vertical Striped Shirt", price: 212, originalPrice: 232, image: verticalShirt },
    { id: 8, name: "Courage Graphic T-shirt", price: 145, image: courageTshirt },
    { id: 9, name: "Loose Fit Bermuda Shorts", price: 80, image: bermudaShorts }
  ];

  return (
    <div className="products-grid-section">
      <div className="section-header">
        <h1 className="page-title">Casual</h1>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-img"
              />
              {product.originalPrice && (
                <div className="discount-badge">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
              )}
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              
              <div className="product-pricing">
                {product.originalPrice ? (
                  <>
                    <span className="current-price">${product.price}</span>
                    <span className="original-price">${product.originalPrice}</span>
                  </>
                ) : (
                  <span className="current-price">${product.price}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;