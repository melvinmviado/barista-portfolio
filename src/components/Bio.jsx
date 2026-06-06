import React from 'react';
import bioImg from '../assets/bio_img.jpg';
export default function Bio() {
  return (
    <section id="bio" className="section">
      <div className="section-title-wrap">
        <span className="section-subtitle">Who I Am</span>
        <h2 className="section-title">Bio</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: '60px',
        alignItems: 'start',
        maxWidth: '960px',
        margin: '0 auto'
      }}>
        <div
          className="glass-card"
          style={{
            aspectRatio: '3 / 4',
            padding: 0,
            overflow: 'hidden',
            minHeight: '400px'
          }}
        >
          <img
            src={bioImg}
            alt="Melvin Viado"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'bottom',
              display: 'block'
            }}
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Melvin Viado
          </h3>
          <p style={{ fontSize: '1.05rem', marginBottom: '24px', lineHeight: '1.7' }}>
            Pulling a well-balanced shot for myself, a friend or family member is something I do multiple times a day and learn more as I do it. I love showing people my home coffee bar, crafting drinks tailored to their taste, and sharing interesting details behind each cup—whether it is why I chose a certain ratio or how microfoam texture changes the mouthfeel.
          </p>
          <p style={{ fontSize: '1.05rem', marginBottom: '24px', lineHeight: '1.7' }}>
            I find happiness in learning and listening to the coffee experiences and preferences of others. Every conversation teaches me something new and deepens my appreciation for how personal and connected the craft of coffee can be. I am committed to continuous learning—studying extraction science, experimenting with recipes, and one day bringing that knowledge behind a commercial bar to serve even more people.
          </p>
        </div>
      </div>
    </section>
  );
}
