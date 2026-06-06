import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Equipment from './components/Equipment';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <Bio />
        <About />
        <Gallery />
        <Equipment />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <span className="footer-brand">☕ Melvin Viado | Barista Portfolio</span>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Melvin Viado. Built with a passion for continuous espresso growth and learning.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
