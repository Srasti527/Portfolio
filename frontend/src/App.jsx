import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
// import CustomCursor from './components/CustomCursor';
// import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="app-container">
      {/* <CustomCursor />
      <ParticleBackground /> */}
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        {/* <GithubStats /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
