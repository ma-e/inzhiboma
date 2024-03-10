import React, { useState } from 'react';
import './Menu.css'; // Import your CSS file

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <ul className="menu-items"> {/* Menu items */}
        <li><a href="#">Zhibo Ma</a></li>
        <li><a href="#">Leadership</a></li>
        <li><a href="#">Sport & Music</a></li>
        <li><a href="#">Publications</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar">_</span>
        <span className="bar">_</span>
        <span className="bar">_</span>
      </button>
    </div>
  );
};

export default Menu;
