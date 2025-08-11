import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import navlogo from '../assets/images/navlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={navlogo} alt="Logo" className="logo-img" />
        Nithya PK
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleDrawer}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Drawer */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li onClick={closeDrawer}><a href="#home">Home</a></li>
        <li onClick={closeDrawer}><a href="#about">About</a></li>
        <li onClick={closeDrawer}><a href="#certifications">Certifications</a></li>
        <li onClick={closeDrawer}><a href="#services">Services</a></li>
        <li onClick={closeDrawer}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
