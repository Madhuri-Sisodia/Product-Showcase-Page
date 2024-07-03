

import React from 'react';
import './Header.css';

const Header = () =>  {
  return (
    <div className="Header">
      <header className="Header-header">
        <img src="nike-logo-png-178.png" className="Header-logo" alt="logo" />
        <nav>
          <ul className="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      {/* Add additional content of your app here */}
    </div>
  );
}

export default Header;
