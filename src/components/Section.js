import React from 'react';
import '../styles/Section.css';

const styles = {
  sectionStyles: {
    background: '#c0c0c0',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Me</h2>
      <p> 
        My name is Stephen (Stee-v-en) Merki (Mur-key). I am currently enrolled in University Wisconsin Coding Bootcamp. I have two associates degrees; Network Administration, Network and Software Support. I have one year professional experience working in web development.
      </p>
      <p>
        Programming languages that I know are HTML, CSS, PHP, JavaScript (DOM), Java, and C++. 
      </p>
      <h2>Portfolio</h2>
      <h3>Prework Study Guide</h3>
      <a href="https://stev232.github.io/prework-study-guide/" target="_blank"><img src="./assets/images/preworkStudy.PNG" alt="Screenshot of prework study guide website" class="screenShot" id="imgPreworkSG" /></a>
      <p>
        The prework study guide was used to help get me ready for the semester. It was built using primarily HTML and CSS with a little bit of JavaScript. The prework study guide taught me how to work with the git bash terminal and upload to github.
      </p>
      <h3>Horiseon</h3>
      <a href="https://stev232.github.io/Horiseon/" target="_blank"><img src="./assets/images/horiseon.PNG" alt="Screenshot of first project with website name of Horiseon" class="screenShot" id="imgHoriseon" /></a>
      <p>
        Horiseon is the first project that we were given in class and it is an exercise in making an already built webpage more accessible.
      </p>
      <h3>Stev232's Password Generator</h3>
      <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank"><img src="./assets/images/passwordGen.PNG" alt="Screenshot of second project with website name of Stev232s Password Generator" class="screenShot" id="imgPasswordGen" /></a>
      <p>
        My password generator was the first project utilizing javascript for the class.
      </p>
      <h3>Stev232's Code Quiz</h3>
      <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank"><img src="./assets/images/codeQuiz.PNG" alt="Screenshot of second project with website name of Stev232s Password Generator" class="screenShot" id="imgCodeQuiz" /></a>
      <p>
        My code quiz features saving data locally with javascript.
      </p>
      <h3>Stev232's Color Grid</h3>
      <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank"><img src="./assets/images/colorGrid.PNG" alt="Screenshot of second project with website name of Stev232s Password Generator" class="screenShot" id="imgColorGrid" /></a>
      <p>
        This project does not work on mobile. For the page layout I used <a href="https://getbootstrap.com/">bootstrap</a> to set the grid. My color grid project is a demonstration of using an array in javascript along with two event listeners. Those listeners are looking for the mouseover event and the click event.
      </p>
    </section>
  );
}

export default Section;
