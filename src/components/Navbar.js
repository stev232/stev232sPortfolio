import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: '#00b3b3',
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="#about">About Me</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact Me</a>
      <a href="#resume">Resume</a>
    </nav>
  );
}

export default Navbar;
