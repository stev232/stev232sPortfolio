import React from 'react';
import '../styles/Section.css';

function ContactMe(data) {
  return (
    <>
      <h2 style={data.styles.titleStyles} id="contact">Contact Me</h2>
      <p style={data.styles.textContentStyles}>Email: <a href="mailto:stephen.merki232@gmail.com">stephen.merki232@gmail.com</a></p>
    </>
  )
}

export default ContactMe;