import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">SHOP.CO</div>
        <nav className="nav">
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">On Sale</a>
          <a href="#" className="nav-link">New Arrivals</a>
          <a href="#" className="nav-link">Brands</a>
        </nav>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;