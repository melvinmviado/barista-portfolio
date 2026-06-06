import React from 'react';
import latteArt1 from '../assets/latte_art1.jpg';
import latteArt2 from '../assets/latte_art2.jpg';
import latteArt3 from '../assets/latte_art3.jpg';

const pours = [
  {
    id: 1,
    title: 'Rosetta',
    desc: 'Classic leaf pattern with even ripple distribution and a sharp stem pull-through.',
    img: latteArt1
  },
  {
    id: 2,
    title: 'Tulip',
    desc: 'Stacked layered hearts with consistent bloom placement and centered symmetry.',
    img: latteArt2
  },
  {
    id: 3,
    title: 'Swan',
    desc: 'Fluid wing motion with controlled neck detail and balanced body proportions.',
    img: latteArt3
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">My Work</span>
        <h2 className="section-title">Latte Art</h2>
      </div>

      <div className="gallery-grid">
        {pours.map((pour) => (
          <div key={pour.id} className="glass-card gallery-card">
            <div className="gallery-img-wrapper">
              <img
                src={pour.img}
                alt={pour.title}
                className="gallery-img"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
