import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="https://img.freepik.com/free-icon/behance_318-788990.jpg" alt="Logo" />
          <h1>Blog Website</h1>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/" className='Link'>Home</Link>
            </li>
            <li>
              <Link to="/favorites" className='Link'>Favorites</Link>
            </li>
            <li>
                Contact Us
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
