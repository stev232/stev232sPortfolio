import React from 'react';
import file from '../files/Resume.docx';
import '../styles/Section.css';

const fileDownload = () => {
  fetch(file).then((response) => {
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "Resume.docx";
      a.click();
    });
  });
}

const images = {
  "stephenMerki": require('../images/stephen.jpg'),
  "preWork": require('../images/preworkStudy.PNG'),
  "horiseon": require('../images/horiseon.PNG'),
  "passwordGen": require("../images/passwordGen.PNG"),
  "codeQuiz": require("../images/codeQuiz.PNG"),
  "colorGrid": require("../images/colorGrid.PNG"),
};

const styles = {
  sectionStyles: {
    background: '#c0c0c0',
  },
  bottomBorderStyles: {
    borderBottom: "1px solid",
    paddingBottom: "5px",
  },
  marginTopStyles: {
    marginTop: "10px",
  },
};

function Section() { 
  return (
    <section style={styles.sectionStyles} className="section">
      <h2 id="about">About Me</h2>
      <img src={images["stephenMerki"]} style={ styles.marginTopStyles } alt="A picture of myself." className="profilePicture" id="imgMyself" />
      <p> 
        My name is Stephen (Stee-v-en) Merki (Mur-key). I am currently enrolled in University Wisconsin Coding Bootcamp. I have two associates degrees; Network Administration, Network and Software Support. I have one year professional experience working in web development.
      </p>
      <p style={{...styles.bottomBorderStyles, ...styles.marginTopStyles}}>
        Programming languages that I know are HTML, CSS, PHP, JavaScript (DOM), Java, and C++. 
      </p>
      <h2 id="portfolio">Portfolio</h2>
      <h3>Prework Study Guide</h3>
      <a href="https://stev232.github.io/prework-study-guide/" target="_blank"><img src={images["preWork"]} alt="Screenshot of prework study guide website" className="screenShot" id="imgPreworkSG" /></a>
      <p style={styles.bottomBorderStyles}>
        The prework study guide was used to help get me ready for the semester. It was built using primarily HTML and CSS with a little bit of JavaScript. The prework study guide taught me how to work with the git bash terminal and upload to github.
      </p>
      <h3>Horiseon</h3>
      <a href="https://stev232.github.io/Horiseon/" target="_blank"><img src={images["horiseon"]} alt="Screenshot of first project with website name of Horiseon" className="screenShot" id="imgHoriseon" /></a>
      <p style={styles.bottomBorderStyles}>
        Horiseon is the first project that we were given in class and it is an exercise in making an already built webpage more accessible.
      </p>
      <h3>Stev232's Password Generator</h3>
      <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank"><img src={images["passwordGen"]} alt="Screenshot of second project with website name of Stev232s Password Generator" className="screenShot" id="imgPasswordGen" /></a>
      <p style={styles.bottomBorderStyles}>
        My password generator was the first project utilizing javascript for the class.
      </p>
      <h3>Stev232's Code Quiz</h3>
      <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank"><img src={images["codeQuiz"]} alt="Screenshot of second project with website name of Stev232s Password Generator" className="screenShot" id="imgCodeQuiz" /></a>
      <p style={styles.bottomBorderStyles}>
        My code quiz features saving data locally with javascript.
      </p>
      <h3>Stev232's Color Grid</h3>
      <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank"><img src={images["colorGrid"]} alt="Screenshot of second project with website name of Stev232s Password Generator" className="screenShot" id="imgColorGrid" /></a>
      <p>
        This project does not work on mobile. For the page layout I used <a href="https://getbootstrap.com/">bootstrap</a> to set the grid. My color grid project is a demonstration of using an array in javascript along with two event listeners. Those listeners are looking for the mouseover event and the click event.
      </p>
      <h2 id="contact">Contact Me</h2>
      <p>Email: <a href="mailto:stephen.merki232@gmail.com">stephen.merki232@gmail.com</a></p>
      <h2 id="resume">Resume</h2>
      <div className="btnDiv">
        <button onClick={fileDownload}>Dowload Resume</button>
      </div>
    </section>
  );
}

export default Section;