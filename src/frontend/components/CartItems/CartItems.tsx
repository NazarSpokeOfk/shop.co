import React from 'react';
import './CartItems.css';
// Импортируем картинки товаров
import gradientTshirt from '../../../assets/images/gradient-graphic-tshirt.png';
import checkeredShirt from '../../../assets/images/checkered-shirt.png';
import skinnyJeans from '../../../assets/images/skinny-fit-jeans.png';

const CartItems = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "Large",
      color: "White",
      quantity: 1,
      image: gradientTshirt
    },
    {
      id: 2,
      name: "Checkered Shirt",
      price: 180,
      size: "Medium",
      color: "Black",
      quantity: 1,
      image: checkeredShirt
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      price: 240,
      size: "Large",
      color: "Blue",
      quantity: 1,
      image: skinnyJeans
    }
  ];

  return (
    <div className="cart-items">
      <h1 className="cart-title">Your Cart</h1>
      
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img 
                src={item.image} 
                alt={item.name}
                className="item-img"
              />
            </div>
            
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <div className="item-options">
                <span className="item-size">Size: {item.size}</span>
                <span className="item-color">Color: {item.color}</span>
              </div>
              <div className="item-price">${item.price}</div>
            </div>
            
            <div className="item-quantity">
              <button className="quantity-btn">-</button>
              <span className="quantity">{item.quantity}</span>
              <button className="quantity-btn">+</button>
            </div>
            
            <div className="item-total">
              ${item.price * item.quantity}
            </div>
            
            <button className="remove-btn">
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;