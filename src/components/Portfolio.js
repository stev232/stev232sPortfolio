import React from 'react';
import '../styles/Section.css';


function Portfolio(data) {
  return(
    <>
      <h2 style={data.styles.titleStyles} id="portfolio">Portfolio</h2>
      <h3 style={data.styles.subTitleStyles}>Prework Study Guide</h3>
      <a href="https://stev232.github.io/prework-study-guide/" target="_blank" rel="noreferrer"><img src={data.images["preWork"]} alt="Screenshot of prework study guide website" className="screenShot" id="imgPreworkSG" /></a>
      <p style={data.styles.textContentStyles}>
        The prework study guide was used to help get me ready for the semester. It was built using primarily HTML and CSS with a little bit of JavaScript. The prework study guide taught me how to work with the git bash terminal and upload to github.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/prework-study-guide/" target="_blank" rel="noreferrer">Prework Study Guide Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/prework-study-guide" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Horiseon</h3>
      <a href="https://stev232.github.io/Horiseon/" target="_blank" rel="noreferrer"><img src={data.images["horiseon"]} alt="Screenshot of first project with website name of Horiseon" className="screenShot" id="imgHoriseon" /></a>
      <p style={data.styles.textContentStyles}>
        Horiseon is the first project that we were given in class and it is an exercise in making an already built webpage more accessible.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/Horiseon/" target="_blank" rel="noreferrer">Horiseon Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Horiseon" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Stev232's Password Generator</h3>
      <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank" rel="noreferrer"><img src={data.images["passwordGen"]} alt="Screenshot of second project with website name of Stev232s Password Generator" className="screenShot" id="imgPasswordGen" /></a>
      <p style={data.styles.textContentStyles}>
        My password generator was the first project utilizing javascript for the class.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/Stev232sPasswordGenerator/" target="_blank" rel="noreferrer">Password Generator Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Stev232sPasswordGenerator" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Stev232's Code Quiz</h3>
      <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank" rel="noreferrer"><img src={data.images["codeQuiz"]} alt="Screenshot of third project with website name of Stev232s Code Quiz" className="screenShot" id="imgCodeQuiz" /></a>
      <p style={data.styles.textContentStyles}>
        My code quiz features saving data locally with javascript.
      </p>
      <p>
        <a href="https://stev232.github.io/Stev232sCodeQuiz/" target="_blank" rel="noreferrer">Code Quiz Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Stev232sCodeQuiz" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Stev232's Day Planner</h3>
      <a href="https://stev232.github.io/Stev232sDayPlanner/" target="_blank" rel="noreferrer"><img src={data.images["dayPlanner"]} alt="Screenshot of fourth project with website name of Stev232s Day Planner" className="screenShot" id="imgDayPlanner" /></a>
      <p style={data.styles.textContentStyles}>
        My day planner utilizes DayJS to get the current time and change the color of the rows in the middle column to corespond with the time of day. If the hour has passed then the field with have a red background. If it is the current hour then the field will be grey. If the field is later in the day then the field is green. If also saves user input in local storage.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/Stev232sDayPlanner/" target="_blank" rel="noreferrer">Day Planner Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Stev232sDayPlanner" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Stev232's Weather Site</h3>
      <a href="https://stev232.github.io/Stev232sWeatherSite/" target="_blank" rel="noreferrer"><img src={data.images["weatherSite"]} alt="Screenshot of fifth project with website name of Stev232s Weather Site" className="screenShot" id="imgWeatherSite" /></a>
      <p style={data.styles.textContentStyles}>
        My weather site features using the <a href="https://openweathermap.org/">Open Weather</a> API to take user input of a city and then display the 5 Day forcast for that area.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/Stev232sWeatherSite/" target="_blank" rel="noreferrer">Weather Site Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Stev232sWeatherSite" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>Stev232's Color Grid</h3>
      <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank" rel="noreferrer"><img src={data.images["colorGrid"]} alt="Screenshot of my personal project with website name of Stev232s ColorGrid" className="screenShot" id="imgColorGrid" /></a>
      <p style={data.styles.textContentStyles}>
        This project does not work on mobile. For the page layout I used <a href="https://getbootstrap.com/">bootstrap</a> to set the grid. My color grid project is a demonstration of using an array in javascript along with two event listeners. Those listeners are looking for the mouseover event and the click event.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://stev232.github.io/Stev232sColorGrid/" target="_blank" rel="noreferrer">Color Grid Link</a>
      </p>
      <p style={{...data.styles.bottomBorderStyles, ...data.styles.textContentStyles}}>
        <a href="https://github.com/stev232/Stev232sColorGrid" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
      <h3 style={data.styles.subTitleStyles}>MERN Marketplace</h3>
      <a href="https://pacific-dawn-34240.herokuapp.com/" target="_blank" rel="noreferrer"><img src={data.images["mearnMarketPlace"]} alt="Screenshot of my personal project with website name of Stev232s ColorGrid" className="screenShot" id="imgColorGrid" /></a>
      <p style={data.styles.textContentStyles}>
        This project uses the MERN stack. In this project I worked with a team of 3 other students as we built a proof of concept e-commerce website. We experimented with ViteJS, my group made this decision because Vite is suppose to be more lightweight compared to the Create React App.
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://pacific-dawn-34240.herokuapp.com/" target="_blank" rel="noreferrer">MERN Marketplace Link</a>
      </p>
      <p style={data.styles.textContentStyles}>
        <a href="https://github.com/gpkarlsson/E_commerce_Placeholder" target="_blank" rel="noreferrer">Github Repository Link</a>
      </p>
    </>
  )
}

export default Portfolio