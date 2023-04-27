import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: '#00b3b3',
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
        <strong>Linkedin</strong>: <a href="https://www.linkedin.com/in/stephen-merki-63064419a">Stephen Merki</a>
        <strong>Twitter</strong>: <a href="https://twitter.com/Stev2332">stev2332</a>
      </p>
    </footer>
  );
}

export default Footer;
