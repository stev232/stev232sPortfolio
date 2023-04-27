import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: '#c0c0c0',
  },
  headingStyle: {
    fontSize: '64px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Stephen Merki's Portfolio</h1>
    </header>
  );
}

export default Header;
