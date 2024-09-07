// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/signupconfirm">SignUpConfirm</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
