import React from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: '#00b3b3',
    height: '100%'
  },
  navItemStyle : {
    fontSize: '1em'
  }
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a style={styles.navItemStyle} href="#about">About Me</a>
      <a style={styles.navItemStyle} href="#portfolio">Portfolio</a>
      <a style={styles.navItemStyle} href="#contact">Contact Me</a>
      <a style={styles.navItemStyle} href="#resume">Resume</a>
    </nav>
  );
}

export default Navbar;
