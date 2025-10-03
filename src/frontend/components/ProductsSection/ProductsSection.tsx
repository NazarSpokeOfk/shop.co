import React from 'react';
import './ProductsSection.css';
// Импортируем фото товаров
import tshirtTape from "../../../assets/images/Frame 32-1.png"
import skinnyJeans1 from "../../../assets/images/Frame 32.png"
import checkeredShirt from "../../../assets/images/Frame 33-1.png"
import stripedTshirt from "../../../assets/images/Frame 33.png"
import verticalShirt from "../../../assets/images/Frame 34-1.png"
import courageTshirt from "../../../assets/images/Frame 34.png"
import bermudaShorts from "../../../assets/images/Frame 38.png"
import skinnyJeans from "../../../assets/images/Frame 38-1.png"

const ProductsSection = () => {
  return (
    <div className="products-container">
      {/* NEW ARRIVALS Section */}
      <div className="section">
        <div className="section-header">
          <h2>NEW ARRIVALS</h2>
          <button className="view-all">View All</button>
        </div>
        
        <div className="products-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src={tshirtTape} alt="T-shirt with Tape Details" />
            </div>
            <div className="product-info">
              <h3>T-shirt with Tape Details</h3>
              <div className="rating">★★★★★ 4.86</div>
              <div className="price">$120</div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src={skinnyJeans1} alt="Skinny Fit Jeans" />
            </div>
            <div className="product-info">
              <h3>Skinny Fit Jeans</h3>
              <div className="rating">★★★ 3.86</div>
              <div className="price">
                <span className="current">$240</span>
                <span className="old">$260</span>
              </div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src={checkeredShirt} alt="Checkered Shirt" />
            </div>
            <div className="product-info">
              <h3>Checkered Shirt</h3>
              <div className="rating">★★★★ 4.86</div>
              <div className="price">$180</div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src={stripedTshirt} alt="Steve Striped T-shirt" />
            </div>
            <div className="product-info">
              <h3>Steve Striped T-shirt</h3>
              <div className="rating">★★★★ 4.86</div>
              <div className="price">
                <span className="current">$130</span>
                <span className="old">$160</span>
                <span className="discount">30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TOP SELLING Section */}
      <div className="section">
        <div className="section-header">
          <h2>TOP SELLING</h2>
          <button className="view-all">View All</button>
        </div>
        
        <div className="products-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src={verticalShirt} alt="Vertical Striped Shirt" />
            </div>
            <div className="product-info">
              <h3>Vertical Striped Shirt</h3>
              <div className="rating">★★★★★ 6.06</div>
              <div className="price">
                <span className="current">$212</span>
                <span className="old">$232</span>
                <span className="discount">20%</span>
              </div>
            </div>
          </div>
          
          {/* Product 2 */}
          <div className="product-card">
            <div className="product-image">
              <img src={courageTshirt} alt="Courage Graphic T-shirt" />
            </div>
            <div className="product-info">
              <h3>Courage Graphic T-shirt</h3>
              <div className="rating">★★★★ 4.06</div>
              <div className="price">$145</div>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="product-card">
            <div className="product-image">
              <img src={bermudaShorts} alt="Loose Fit Bermuda Shorts" />
            </div>
            <div className="product-info">
              <h3>Loose Fit Bermuda Shorts</h3>
              <div className="rating">★★★ 3.06</div>
              <div className="price">$80</div>
            </div>
          </div>
          
          {/* Product 4 */}
          <div className="product-card">
            <div className="product-image">
              <img src={skinnyJeans} alt="Faded Skinny Jeans" />
            </div>
            <div className="product-info">
              <h3>Faded Skinny Jeans</h3>
              <div className="rating">★★★★ 4.86</div>
              <div className="price">$210</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;