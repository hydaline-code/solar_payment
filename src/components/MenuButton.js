// src/components/MenuButton.js
import React, { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/MenuButton.css'; // Add relevant styling here

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Close menu function
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Menu Toggle Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <BiMenuAltRight size={38} />
      </button>

      {/* Sidebar Menu */}
      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
          <BiX size={34} />
        </button>
        <ul>
          <li>
            <Link to="/HomePage" onClick={closeMenu}>Home</Link>
          </li>
          <li>
          <Link to="/User" onClick={closeMenu}>User</Link>
          </li>
          <li>
            <Link to="/addUsers" onClick={closeMenu}>New User</Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuButton;
