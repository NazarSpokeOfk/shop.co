import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-btn prev-btn">
        Previous
      </button>
      
      <div className="pagination-numbers">
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <span className="page-dots">...</span>
        <button className="page-number">8</button>
        <button className="page-number">9</button>
        <button className="page-number">10</button>
      </div>
      
      <button className="pagination-btn next-btn">
        Next
      </button>
    </div>
  );
};

export default Pagination;