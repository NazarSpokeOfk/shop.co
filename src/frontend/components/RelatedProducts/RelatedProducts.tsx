import React from 'react';
import './RelatedProducts.css';
// Импортируем картинки похожих товаров
import poloContrast from '../../../assets/images/ymal1.png';
import gradientTshirt from '../../../assets/images/ymal2.png';
import poloTipping from '../../../assets/images/ymal3.png';
import blackStriped from '../../../assets/images/ymal4.png';

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Polo with Contrast Trims",
      rating: 4.0,
      stars: 5,
      price: 212,
      originalPrice: 252,
      discount: 30,
      image: poloContrast
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      rating: 3.6,
      stars: 4,
      price: 155,
      image: gradientTshirt
    },
    {
      id: 3,
      name: "Polo with Tipping Details",
      rating: 4.6,
      stars: 5,
      price: 180,
      image: poloTipping
    },
    {
      id: 4,
      name: "Black Striped T-shirt",
      rating: 6.0,
      stars: 5,
      price: 120,
      originalPrice: 150,
      discount: 30,
      image: blackStriped
    }
  ];

  const renderStars = (count: number) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <section className="related-products">
      <div className="related-container">
        <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                />
                {product.discount && (
                  <div className="discount-badge">{product.discount}% OFF</div>
                )}
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  <span className="stars">{renderStars(product.stars)}</span>
                  <span className="rating-value">{product.rating.toFixed(1)}/5</span>
                </div>
                
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
    </section>
  );
};

export default RelatedProducts;