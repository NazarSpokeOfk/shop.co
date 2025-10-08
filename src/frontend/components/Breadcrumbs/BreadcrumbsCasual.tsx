import React from 'react';
import './Breadcrumbs.css';

const BreadcrumbsCasual = () => {
  return (
    <nav className="breadcrumbs">
      <a href="#" className="breadcrumb-link">Home</a>
      <span className="breadcrumb-separator">›</span>
      <span className="breadcrumb-current">Casual</span>
    </nav>
  );
};

export default BreadcrumbsCasual;