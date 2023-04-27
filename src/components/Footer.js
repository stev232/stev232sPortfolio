import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: '#00b3b3',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <p>
        <strong>GitHub</strong>: <a href="https://github.com/stev232">stev232</a> 
      </p>
      <p>
        <strong>Linkedin</strong>: <a href="https://www.linkedin.com/in/stephen-merki-63064419a">Stephen Merki</a> 
      </p>
      <p>
        <strong>Twitter</strong>: <a href="https://twitter.com/Stev2332">stev2332</a> 
      </p>
    </footer>
  );
}

export default Footer;
