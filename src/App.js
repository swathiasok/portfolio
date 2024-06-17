import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import Experience from './Experiences';
import Project from './Project';
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
        <NavBar/>
        <br />
        <Home />
        <hr />
        <Experience />
        <hr />
        <Project />
      </div>
  );
}

export default App;
