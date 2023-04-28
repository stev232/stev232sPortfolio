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
  "dayPlanner": require("../images/dayPlanner.PNG"),
  "weatherSite": require("../images/weatherSite.PNG"),
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
      <a href="https://stev232.github.io/prework-study-guide/" target="_blank" rel="noreferrer"><img src={images["preWork"]} alt="Screenshot of prework study guide website" className="screenShot" id="imgPreworkSG" /></a>
      <p>
        The prework study guide was used to help get me ready for the semester. It was built using primarily HTML and CSS with a little bit of JavaScript. The prework study guide taught me how to work with the git bash terminal and upload to github.
      </p>
      <p>
        <a href="https://stev232.github.io/prework-study-guide/" target="_blank" rel="noreferrer">Prework Study Guide Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/prework-study-guide" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Horiseon</h3>
      <a href="https://stev232.github.io/Horiseon/" target="_blank" rel="noreferrer"><img src={images["horiseon"]} alt="Screenshot of first project with website name of Horiseon" className="screenShot" id="imgHoriseon" /></a>
      <p>
        Horiseon is the first project that we were given in class and it is an exercise in making an already built webpage more accessible.
      </p>
      <p>
        <a href="https://stev232.github.io/Horiseon/" target="_blank" rel="noreferrer">Horiseon Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/Horiseon" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Stev232's Password Generator</h3>
      <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank" rel="noreferrer"><img src={images["passwordGen"]} alt="Screenshot of second project with website name of Stev232s Password Generator" className="screenShot" id="imgPasswordGen" /></a>
      <p>
        My password generator was the first project utilizing javascript for the class.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank" rel="noreferrer">Password Generator Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/Stev232sPasswordGenerator" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Stev232's Code Quiz</h3>
      <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank" rel="noreferrer"><img src={images["codeQuiz"]} alt="Screenshot of third project with website name of Stev232s Code Quiz" className="screenShot" id="imgCodeQuiz" /></a>
      <p>
        My code quiz features saving data locally with javascript.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank" rel="noreferrer">Code Quiz Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/Stev232sCodeQuiz" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Stev232's Day Planner</h3>
      <a href="https://stev232.github.io/Stev232sDayPlanner/" target="_blank" rel="noreferrer"><img src={images["dayPlanner"]} alt="Screenshot of fourth project with website name of Stev232s Day Planner" className="screenShot" id="imgDayPlanner" /></a>
      <p>
        My day planner utilizes DayJS to get the current time and change the color of the rows in the middle column to corespond with the time of day. If the hour has passed then the field with have a red background. If it is the current hour then the field will be grey. If the field is later in the day then the field is green. If also saves user input in local storage.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sDayPlanner/" target="_blank" rel="noreferrer">Day Planner Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/Stev232sDayPlanner" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Stev232's Weather Site</h3>
      <a href="https://stev232.github.io/Stev232sWeatherSite/" target="_blank" rel="noreferrer"><img src={images["weatherSite"]} alt="Screenshot of fifth project with website name of Stev232s Weather Site" className="screenShot" id="imgWeatherSite" /></a>
      <p>
        My weather site features using the <a href="https://openweathermap.org/">Open Weather</a> API to take user input of a city and then display the 5 Day forcast for that area.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sWeatherSite/" target="_blank" rel="noreferrer">Weather Site Link</a>
      </p>
      <p style={styles.bottomBorderStyles}>
        <a href="https://github.com/stev232/Stev232sWeatherSite" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3>Stev232's Color Grid</h3>
      <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank" rel="noreferrer"><img src={images["colorGrid"]} alt="Screenshot of my personal project with website name of Stev232s ColorGrid" className="screenShot" id="imgColorGrid" /></a>
      <p>
        This project does not work on mobile. For the page layout I used <a href="https://getbootstrap.com/">bootstrap</a> to set the grid. My color grid project is a demonstration of using an array in javascript along with two event listeners. Those listeners are looking for the mouseover event and the click event.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank" rel="noreferrer">Color Grid Link</a>
      </p>
      <p>
        <a href="https://github.com/stev232/Stev232sColorGrid" target="_blank" rel="noreferrer">Github Repository Link</a>
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