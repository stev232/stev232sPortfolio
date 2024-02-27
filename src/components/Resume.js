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

function Resume(data) {
  return (
    <>
      <h2 style={data.styles.titleStyles} id="resume">Resume</h2>
      <div className="btnDiv">
        <button onClick={fileDownload} style={data.styles.textContentStyles}>Dowload Resume</button>
      </div>
    </>
  )
}

export default Resume;