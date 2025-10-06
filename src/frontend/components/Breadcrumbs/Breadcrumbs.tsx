import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  return (
    <nav className="breadcrumbs">
      <a href="#" className="breadcrumb-link">Home</a>
      <span className="breadcrumb-separator">›</span>
      <a href="#" className="breadcrumb-link">Shop</a>
      <span className="breadcrumb-separator">›</span>
      <a href="#" className="breadcrumb-link">Men</a>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-current">T-shirts</span>
    </nav>
  );
};

export default Breadcrumbs;