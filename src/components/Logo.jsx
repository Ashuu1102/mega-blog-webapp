import React from 'react';
import logo from '../assets/logo.png'; 
const Logo = ({ width = '210px' }) => {
  return (
    <div>
      <img src={logo} alt="Website Logo" style={{ width }} className="rounded-lg" />
    </div>
  );
};

export default Logo;
