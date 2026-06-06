import React from 'react';
import heroBg from '../assets/hero_bg.gif';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-content animate-fade-in">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Open for Barista Roles around Oshawa, ON</span>
          </div>

          <h1 className="hero-title">
            Crafting Espresso
          </h1>

          <p className="hero-description">
            Home-barista in continuous progression, deeply passionate about learning the science of espresso extraction, milk microfoam texture, and cafe workflows. Eager to grow under mentorship.
          </p>

          <div className="hero-cta">
            <button
              onClick={() => handleScrollTo('gallery')}
              className="btn btn-primary"
            >
              Explore Latte Art
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="btn btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image-container animate-slide-up">
          <div className="hero-image-wrapper">
            <img
              src={heroBg}
              alt="Barista pouring a beautiful latte art in a cozy specialty coffee shop"
              className="hero-img"
              loading="eager"
            />
          </div>
          <div className="hero-image-decorator"></div>
        </div>
      </div>
    </section>
  );
}
