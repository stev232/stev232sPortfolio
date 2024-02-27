import React from 'react';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: '#00b3b3',
    height: 'auto',
    padding: '5px'
  },
  headingStyle: {
    fontSize: '3.5em',
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
