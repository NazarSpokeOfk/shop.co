import React from 'react';
import './Brands.css';
import versace from '../../../assets/images/versace.png'
import zara from '../../../assets/images/zara-logo-1 1.png'
import gucci from '../../../assets/images/gucci-logo-1 1.png'
import prada from '../../../assets/images/prada-logo-1 1.png'
import calvin from '../../../assets/images/calvin.png'

const Brands: React.FC = () => {
  const brands = [
    { name: 'VERSACE', logo: versace },
    { name: 'ZARA', logo: zara },
    { name: 'GUCCI', logo: gucci },
    { name: 'PRADA', logo: prada },
    { name: 'Calvin Klein', logo: calvin }
  ];

  return (
    <div className="brands-wrapper">
      <section className="brands">
        <div className="brands-container">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;