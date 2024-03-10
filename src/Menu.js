import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="brand">Zhibo Ma</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={isOpen ? 'open' : ''}>
        <li><a href="#">Leadership</a></li>
        <li><a href="#">Sport & Music</a></li>
        <li><a href="#">Publications</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </div>
  );
}

export default Menu;
