import React from 'react';
import '../styles/Section.css';

function AboutMe(data) {
  return (
    <>
      <h2 style={data.styles.titleStyles} id="about">About Me</h2>
      <img src={data.images} style={data.styles.marginTopStyles} alt="A picture of myself." className="profilePicture" id="imgMyself" />
      <p style={data.styles.textContentStyles}>
        My name is Stephen (Stee-v-en) Merki (Mur-key). I am currently enrolled in University Wisconsin Coding Bootcamp. I have two associates degrees; Network Administration, Network and Software Support. I have one year professional experience working in web development.
      </p>
      <p style={{ ...data.styles.bottomBorderStyles, ...data.styles.marginTopStyles, ...data.styles.textContentStyles }}>
        Programming languages that I know are HTML, CSS, PHP, JavaScript (DOM), Java, and C++.
      </p>
    </>
  );
}

export default AboutMe;