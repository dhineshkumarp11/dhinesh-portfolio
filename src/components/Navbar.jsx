// Copy and paste this to replace the entire Navbar.jsx file
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Dhineshkumar P.</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
        {/* 👇 Here is the new Resume Link in the Navbar 👇 */}
        <li>
          <a 
            href="https://drive.google.com/file/d/130Fixmg5HgZDQDVbwz-aj4oOhJdph6cr/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            style={{ color: '#8b5cf6', fontWeight: 'bold' }}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;