import React from 'react';
import './Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <h3 className="filters-title">Filters</h3>
      
      <div className="filter-group">
        <h4 className="filter-subtitle">Categories</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
            T-shirts
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Shorts
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Shirts
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Hoodie
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Jeans
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-subtitle">Price</h4>
        <div className="price-range">
          <span className="price-label">$50 - $200</span>
          <input 
            type="range" 
            className="price-slider"
            min="50"
            max="200"
            defaultValue="145"
          />
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-subtitle">Colors</h4>
        <div className="color-filters">
          <button className="color-filter black"></button>
          <button className="color-filter white"></button>
          <button className="color-filter red"></button>
          <button className="color-filter blue"></button>
          <button className="color-filter green"></button>
          <button className="color-filter yellow"></button>
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-subtitle">Size</h4>
        <div className="size-filters">
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            XX-Small
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            X-Small
          </label>
          <label className="size-option-filter">
            <input type="checkbox" defaultChecked />
            <span className="size-checkmark"></span>
            Small
          </label>
          <label className="size-option-filter">
            <input type="checkbox" defaultChecked />
            <span className="size-checkmark"></span>
            Medium
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            Large
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            X-Large
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            XX-Large
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            3X-Large
          </label>
          <label className="size-option-filter">
            <input type="checkbox" />
            <span className="size-checkmark"></span>
            4X-Large
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-subtitle">Dress Style</h4>
        <div className="filter-options">
          <label className="filter-option">
            <input type="checkbox" defaultChecked />
            <span className="checkmark"></span>
            Casual
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Formal
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Party
          </label>
          <label className="filter-option">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Gym
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;