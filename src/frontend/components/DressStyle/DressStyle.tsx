import React from 'react';
import './DressStyle.css';
import casual from '../../../assets/images/image 11.png'
import party from '../../../assets/images/image 12.png'
import formal from '../../../assets/images/image 13.png'
import gym from '../../../assets/images/image 14.png'


const DressStyle = () => {
  return (
    <div className="dress-style">
      <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
      
      <div className="styles-grid">
        <div 
          className="style-card casual" 
          style={{ backgroundImage: `url(${casual})` }}
        >
          <h3>Casual</h3>
        </div>
        
        <div 
          className="style-card formal" 
          style={{ backgroundImage: `url(${party})` }}
        >
          <h3>Formal</h3>
        </div>
        
        <div 
          className="style-card party" 
          style={{ backgroundImage: `url(${formal})` }}
        >
          <h3>Party</h3>
        </div>
        
        <div 
          className="style-card gym" 
          style={{ backgroundImage: `url(${gym})` }}
        >
          <h3>Gym</h3>
        </div>
      </div>
    </div>
  );
};


export default DressStyle;