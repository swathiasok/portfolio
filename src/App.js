import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Introduction from './Home';
import Experience from './Experiences';
import Projects from './Project';
import './App.css';
import Particles from "react-tsparticles";
import { loadLinksPreset } from '@tsparticles/preset-links';
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadLinksPreset(main);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills" element={<Introduction />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
        <br />
        <Introduction />
        <hr />
        <Experience />
        <hr />
        <Projects />
      </div>
  );
}

export default App;
