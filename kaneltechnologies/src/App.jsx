// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import {
  Home,
  About,
  Team,
  Projects,
  Testimonials,
  Blog,
  Contact,
} from './components/sections.jsx';

function App() {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />

      {/* Add padding-top to offset fixed nav height */}
      <div className="pt-16">
        <Home />
        <About />
        <Team />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
