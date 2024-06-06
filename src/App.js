import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles"; 
import NavBar from './Navbar';
import Home from './Home';
import Experience from './Experiences';
import Project from './Project';
import './App.css';

function App() {
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
