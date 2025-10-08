import React from 'react';
import './Breadcrumbs.css';

const BreadcrumbsCart = () => {
  return (
    <nav className="breadcrumbs">
      <a href="#" className="breadcrumb-link">Home</a>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-current">Your Cart</span>
    </nav>
  );
};

export default BreadcrumbsCart;