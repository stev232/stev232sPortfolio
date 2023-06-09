import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        { document.body.style = 'background: black;' }
        <Navbar />
        <Header />
        <Section />
        <Footer />
      </div>
  );
}

export default App;
