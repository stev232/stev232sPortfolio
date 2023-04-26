import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '20px',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <p style={styles.headingStyle}>
        <strong>GitHub</strong>: <a href="https://github.com/stev232">stev232</a>
      </p>
    </footer>
  );
}

export default Footer;
