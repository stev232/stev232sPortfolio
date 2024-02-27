import React from 'react';
import '../styles/Section.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';

const images = {
  "stephenMerki": require('../images/stephen.jpg'),
  "preWork": require('../images/preworkStudy.PNG'),
  "horiseon": require('../images/horiseon.PNG'),
  "passwordGen": require("../images/passwordGen.PNG"),
  "codeQuiz": require("../images/codeQuiz.PNG"),
  "dayPlanner": require("../images/dayPlanner.PNG"),
  "weatherSite": require("../images/weatherSite.PNG"),
  "colorGrid": require("../images/colorGrid.PNG"),
  "mearnMarketPlace": require("../images/mearnMarketPlace.PNG"),
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
  titleStyles: {
    fontSize: '2em'
  },
  subTitleStyles: {
    fontSize: '1.5em'
  },
  textContentStyles: {
    fontSize: '1em'
  }
};

function Section() { 
  return (
    <section style={styles.sectionStyles} className="section">
      <AboutMe
        styles = {styles}
        images = {images["stephenMerki"]} />
      <Portfolio
        styles = {styles}
        images = {images} />
      <ContactMe
        styles = {styles} />
      <Resume
        styles = {styles} />
    </section>
  );
}

export default Section;